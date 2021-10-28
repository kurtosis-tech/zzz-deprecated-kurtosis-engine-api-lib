/*
 *    Copyright 2021 Kurtosis Technologies Inc.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *
 */

package networks

import (
	"context"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/binding_constructors"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/modules"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/services"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"path/filepath"
)

type PartitionID string

const (
	// This will always resolve to the default partition ID (regardless of whether such a partition exists in the network,
	//  or it was repartitioned away)
	defaultPartitionId PartitionID = ""

	// The path on the user service container where the enclave data dir will be bind-mounted
	serviceEnclaveDataDirMountpoint = "/kurtosis-enclave-data"
)

// TODO Rename to EnclaveContext
// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
type NetworkContext struct {
	client kurtosis_engine_rpc_api_bindings.EngineServiceClient

	enclaveId string

	// The location on the filesystem where this code is running where the enclave data dir exists
	enclaveDataDirpath string
}

/*
Creates a new NetworkContext object with the given parameters.
*/

func NewNetworkContext(client kurtosis_engine_rpc_api_bindings.EngineServiceClient, enclaveId string, enclaveDataDirpath string) *NetworkContext {
	return &NetworkContext{client: client, enclaveId: enclaveId, enclaveDataDirpath: enclaveDataDirpath}
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) LoadModule(
		moduleId modules.ModuleID,
		image string,
		serializedParams string) (*modules.ModuleContext, error) {
	args := binding_constructors.NewLoadModuleArgs(
		networkCtx.enclaveId,
		string(moduleId),
		image,
		serializedParams,
	)

	// We proxy calls to execute modules via the API container, so actually no need to use the response here
	_, err := networkCtx.client.LoadModule(context.Background(), args)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred loading new module '%v' with image '%v' and serialized params '%v'", moduleId, image, serializedParams)
	}
	moduleCtx := modules.NewModuleContext(networkCtx.client, networkCtx.enclaveId, moduleId)
	return moduleCtx, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) UnloadModule(moduleId modules.ModuleID) error {
	args := binding_constructors.NewUnloadModuleArgs(networkCtx.enclaveId, string(moduleId))

	_, err := networkCtx.client.UnloadModule(context.Background(), args)
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred unloading module '%v'", moduleId)
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) GetModuleContext(moduleId modules.ModuleID) (*modules.ModuleContext, error) {
	args := binding_constructors.NewGetModuleInfoArgs(networkCtx.enclaveId, string(moduleId))

	// NOTE: As of 2021-07-18, we actually don't use any of the info that comes back because the ModuleContext doesn't require it!
	_, err := networkCtx.client.GetModuleInfo(context.Background(), args)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting info for module '%v'", moduleId)
	}
	moduleCtx := modules.NewModuleContext(networkCtx.client, networkCtx.enclaveId, moduleId)
	return moduleCtx, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) RegisterFilesArtifacts(filesArtifactUrls map[services.FilesArtifactID]string) error {
	filesArtifactIdStrsToUrls := map[string]string{}
	for artifactId, url := range filesArtifactUrls {
		filesArtifactIdStrsToUrls[string(artifactId)] = url
	}
	args := binding_constructors.NewRegisterFilesArtifactArgs(networkCtx.enclaveId, filesArtifactIdStrsToUrls)
	if _, err := networkCtx.client.RegisterFilesArtifacts(context.Background(), args); err != nil {
		return stacktrace.Propagate(err, "An error occurred registering files artifacts: %+v", filesArtifactUrls)
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) AddService(
		serviceId services.ServiceID,
		containerConfigSupplier func(ipAddr string, sharedDirectory *services.SharedPath) (*services.ContainerConfig, error),
	) (*services.ServiceContext, map[string]*kurtosis_engine_rpc_api_bindings.PortBinding, error) {

	serviceContext, hostPortBindings, err := networkCtx.AddServiceToPartition(
		serviceId,
		defaultPartitionId,
		containerConfigSupplier,
	)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred adding service '%v' to the network in the default partition", serviceId)
	}

	return serviceContext, hostPortBindings, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) AddServiceToPartition(
		serviceId services.ServiceID,
		partitionID PartitionID,
		containerConfigSupplier func(ipAddr string, sharedDirectory *services.SharedPath) (*services.ContainerConfig, error),
		) (*services.ServiceContext, map[string]*kurtosis_engine_rpc_api_bindings.PortBinding, error) {

	ctx := context.Background()

	logrus.Trace("Registering new service ID with Kurtosis API...")
	registerServiceArgs := binding_constructors.NewRegisterServiceArgs(networkCtx.enclaveId, string(serviceId), string(partitionID))

	registerServiceResp, err := networkCtx.client.RegisterService(ctx, registerServiceArgs)
	if err != nil {
		return nil, nil, stacktrace.Propagate(
			err,
			"An error occurred registering service with ID '%v' with the Kurtosis API",
			serviceId)
	}
	logrus.Trace("New service successfully registered with Kurtosis API")

	serviceIpAddr := registerServiceResp.IpAddr
	relativeServiceDirpath := registerServiceResp.RelativeServiceDirpath

	sharedDirectory := networkCtx.getSharedDirectory(relativeServiceDirpath)

	logrus.Trace("Generating container config object using the container config supplier...")
	containerConfig, err := containerConfigSupplier(serviceIpAddr, sharedDirectory)
	if err != nil {
		return nil, nil, stacktrace.Propagate(
			err,
			"An error occurred executing the container config supplier for service with ID '%v'",
			serviceId)
	}
	logrus.Trace("Container config object successfully generated")

	logrus.Tracef("Creating files artifact ID str -> mount dirpaths map...")
	artifactIdStrToMountDirpath := map[string]string{}
	for filesArtifactId, mountDirpath := range containerConfig.GetFilesArtifactMountpoints() {
		artifactIdStrToMountDirpath[string(filesArtifactId)] = mountDirpath
	}
	logrus.Trace("Successfully created files artifact ID str -> mount dirpaths map")

	logrus.Trace("Starting new service with Kurtosis API...")
	startServiceArgs := binding_constructors.NewStartServiceArgs(
		networkCtx.enclaveId,
		string(serviceId),
		containerConfig.GetImage(),
		containerConfig.GetUsedPortsSet(),
		containerConfig.GetEntrypointOverrideArgs(),
		containerConfig.GetCmdOverrideArgs(),
		containerConfig.GetEnvironmentVariableOverrides(),
		serviceEnclaveDataDirMountpoint,
		artifactIdStrToMountDirpath,
	)
	resp, err := networkCtx.client.StartService(ctx, startServiceArgs)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred starting the service with the Kurtosis API")
	}
	logrus.Trace("Successfully started service with Kurtosis API")

	serviceContext := services.NewServiceContext(
		networkCtx.client,
		networkCtx.enclaveId,
		serviceId,
		serviceIpAddr,
		sharedDirectory,
	)

	return serviceContext, resp.UsedPortsHostPortBindings, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) GetServiceContext(serviceId services.ServiceID) (*services.ServiceContext, error) {
	getServiceInfoArgs := binding_constructors.NewGetServiceInfoArgs(networkCtx.enclaveId, string(serviceId))
	serviceResponse, err := networkCtx.client.GetServiceInfo(context.Background(), getServiceInfoArgs)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred when trying to get info for service '%v'",
			serviceId)
	}
	if serviceResponse.GetIpAddr() == "" {
		return nil, stacktrace.NewError(
			"Kurtosis API reported an empty IP address for service '%v' - this should never happen, and is a bug with Kurtosis!",
			serviceId)
	}

	relativeServiceDirpath := serviceResponse.GetRelativeServiceDirpath()
	if relativeServiceDirpath == "" {
		return nil, stacktrace.NewError(
			"Kurtosis API reported an empty relative service directory path for service '%v' - this should never happen, and is a bug with Kurtosis!",
			serviceId)
	}

	enclaveDataDirMountDirpathOnSvcContainer := serviceResponse.GetEnclaveDataDirMountDirpath()
	if enclaveDataDirMountDirpathOnSvcContainer == "" {
		return nil, stacktrace.NewError(
			"Kurtosis API reported an empty enclave data dir mount dirpath for service '%v' - this should never happen, and is a bug with Kurtosis!",
			serviceId)
	}

	sharedDirectory := networkCtx.getSharedDirectory(relativeServiceDirpath)

	serviceContext := services.NewServiceContext(
		networkCtx.client,
		networkCtx.enclaveId,
		serviceId,
		serviceResponse.GetIpAddr(),
		sharedDirectory,
	)

	return serviceContext, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) RemoveService(serviceId services.ServiceID, containerStopTimeoutSeconds uint64) error {

	logrus.Debugf("Removing service '%v'...", serviceId)
	// NOTE: This is kinda weird - when we remove a service we can never get it back so having a container
	//  stop timeout doesn't make much sense. It will make more sense when we can stop/start containers
	// Independent of adding/removing them from the network
	args := binding_constructors.NewRemoveServiceArgs(networkCtx.enclaveId, string(serviceId), containerStopTimeoutSeconds)
	if _, err := networkCtx.client.RemoveService(context.Background(), args); err != nil {
		return stacktrace.Propagate(err, "An error occurred removing service '%v' from the network", serviceId)
	}

	logrus.Debugf("Successfully removed service ID %v", serviceId)

	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) RepartitionNetwork(
	partitionServices map[PartitionID]map[services.ServiceID]bool,
	partitionConnections map[PartitionID]map[PartitionID]*kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo,
	defaultConnection *kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo,
) error {

	if partitionServices == nil {
		return stacktrace.NewError("Partition services map cannot be nil")
	}
	if defaultConnection == nil {
		return stacktrace.NewError("Default connection cannot be nil")
	}

	// Cover for lazy/confused users
	if partitionConnections == nil {
		partitionConnections = map[PartitionID]map[PartitionID]*kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo{}
	}

	reqPartitionServices := map[string]*kurtosis_engine_rpc_api_bindings.PartitionServices{}
	for partitionId, serviceIdSet := range partitionServices {
		serviceIdStrPseudoSet := map[string]bool{}
		for serviceId := range serviceIdSet {
			serviceIdStr := string(serviceId)
			serviceIdStrPseudoSet[serviceIdStr] = true
		}
		partitionIdStr := string(partitionId)
		reqPartitionServices[partitionIdStr] = binding_constructors.NewPartitionServices(serviceIdStrPseudoSet)
	}

	reqPartitionConns := map[string]*kurtosis_engine_rpc_api_bindings.PartitionConnections{}
	for partitionAId, partitionAConnsMap := range partitionConnections {
		partitionAConnsStrMap := map[string]*kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo{}
		for partitionBId, connInfo := range partitionAConnsMap {
			partitionBIdStr := string(partitionBId)
			partitionAConnsStrMap[partitionBIdStr] = connInfo
		}
		partitionAConns := binding_constructors.NewPartitionConnections(partitionAConnsStrMap)
		partitionAIdStr := string(partitionAId)
		reqPartitionConns[partitionAIdStr] = partitionAConns
	}

	repartitionArgs := binding_constructors.NewRepartitionArgs(networkCtx.enclaveId, reqPartitionServices, reqPartitionConns, defaultConnection)
	if _, err := networkCtx.client.Repartition(context.Background(), repartitionArgs); err != nil {
		return stacktrace.Propagate(err, "An error occurred repartitioning the test network")
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) WaitForHttpGetEndpointAvailability(serviceId services.ServiceID, port uint32, path string, initialDelayMilliseconds uint32, retries uint32, retriesDelayMilliseconds uint32, bodyText string) error {

	availabilityArgs := binding_constructors.NewWaitForHttpGetEndpointAvailabilityArgs(
		networkCtx.enclaveId,
		string(serviceId),
		port,
		path,
		initialDelayMilliseconds,
		retries,
		retriesDelayMilliseconds,
		bodyText,
	)

	if _, err := networkCtx.client.WaitForHttpGetEndpointAvailability(context.Background(), availabilityArgs); err != nil {
		return stacktrace.Propagate(
			err,
			"Endpoint '%v' on port '%v' for service '%v' did not become available despite polling %v times with %v between polls",
			path,
			port,
			serviceId,
			retries,
			retriesDelayMilliseconds,
		)
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) WaitForHttpPostEndpointAvailability(serviceId services.ServiceID, port uint32, path string, requestBody string, initialDelayMilliseconds uint32, retries uint32, retriesDelayMilliseconds uint32, bodyText string) error {

	availabilityArgs := binding_constructors.NewWaitForHttpPostEndpointAvailabilityArgs(
		networkCtx.enclaveId,
		string(serviceId),
		port,
		path,
		requestBody,
		initialDelayMilliseconds,
		retries,
		retriesDelayMilliseconds,
		bodyText,
	)

	if _, err := networkCtx.client.WaitForHttpPostEndpointAvailability(context.Background(), availabilityArgs); err != nil {
		return stacktrace.Propagate(
			err,
			"Endpoint '%v' on port '%v' for service '%v' did not become available despite polling %v times with %v between polls",
			path,
			port,
			serviceId,
			retries,
			retriesDelayMilliseconds,
		)
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) ExecuteBulkCommands(bulkCommandsJson string) error {
	args := binding_constructors.NewExecuteBulkCommandsArgs(networkCtx.enclaveId, bulkCommandsJson)
	if _, err := networkCtx.client.ExecuteBulkCommands(context.Background(), args); err != nil {
		return stacktrace.Propagate(err, "An error occurred executing the following bulk commands: %v", bulkCommandsJson)
	}
	return nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) GetServices() (map[services.ServiceID]bool, error){
	args := binding_constructors.NewGetServicesArgs(networkCtx.enclaveId)
	response, err := networkCtx.client.GetServices(context.Background(), args)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting the service IDs in the network")
	}

	serviceIds := make(map[services.ServiceID]bool, len(response.GetServiceIds()))

	for key, _ := range response.GetServiceIds() {
		serviceId := services.ServiceID(key)
		if _, ok := serviceIds[serviceId]; !ok{
			serviceIds[serviceId] = true
		}
	}

	return serviceIds, nil
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (networkCtx *NetworkContext) GetModules() (map[modules.ModuleID]bool, error){
	args := binding_constructors.NewGetModulesArgs(networkCtx.enclaveId)
	response, err := networkCtx.client.GetModules(context.Background(), args)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting the IDs of the modules in the network")
	}

	moduleIDs := make(map[modules.ModuleID]bool, len(response.GetModuleIds()))

	for key, _ := range response.GetModuleIds() {
		moduleID := modules.ModuleID(key)
		if _, ok := moduleIDs[moduleID]; !ok {
			moduleIDs[moduleID] = true
		}
	}

	return moduleIDs, nil
}

// ====================================================================================================
// 									   Private helper methods
// ====================================================================================================
func (networkCtx *NetworkContext) getSharedDirectory(relativeServiceDirpath string) *services.SharedPath {

	absFilepathOnThisContainer := filepath.Join(networkCtx.enclaveDataDirpath, relativeServiceDirpath)
	absFilepathOnServiceContainer := filepath.Join(serviceEnclaveDataDirMountpoint, relativeServiceDirpath)

	sharedDirectory := services.NewSharedPath(absFilepathOnThisContainer, absFilepathOnServiceContainer)

	return sharedDirectory
}
