package binding_constructors

import "github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"

// The generated bindings don't come with constructors (leaving it up to the user to initialize all the fields), so we
// add them so that our code is safer

// ==============================================================================================
//                                     Load Module
// ==============================================================================================
func NewLoadModuleArgs(enclaveId string, moduleId string, containerImage string, serializedParams string) *kurtosis_engine_rpc_api_bindings.LoadModuleArgs {
	return &kurtosis_engine_rpc_api_bindings.LoadModuleArgs{
		EnclaveId:        enclaveId,
		ModuleId:         moduleId,
		ContainerImage:   containerImage,
		SerializedParams: serializedParams,
	}
}

// ==============================================================================================
//                                     Unload Module
// ==============================================================================================
func NewUnloadModuleArgs(enclaveId string, moduleId string) *kurtosis_engine_rpc_api_bindings.UnloadModuleArgs {
	return &kurtosis_engine_rpc_api_bindings.UnloadModuleArgs{
		EnclaveId: enclaveId,
		ModuleId:  moduleId,
	}
}

// ==============================================================================================
//                                     Execute Module
// ==============================================================================================
func NewExecuteModuleArgs(enclaveId string, moduleId string, serializedParams string) *kurtosis_engine_rpc_api_bindings.ExecuteModuleArgs {
	return &kurtosis_engine_rpc_api_bindings.ExecuteModuleArgs{
		EnclaveId:        enclaveId,
		ModuleId:         moduleId,
		SerializedParams: serializedParams,
	}
}

func NewExecuteModuleResponse(serializedResult string) *kurtosis_engine_rpc_api_bindings.ExecuteModuleResponse {
	return &kurtosis_engine_rpc_api_bindings.ExecuteModuleResponse{
		SerializedResult: serializedResult,
	}
}

// ==============================================================================================
//                                     Get Module Info
// ==============================================================================================
func NewGetModuleInfoArgs(enclaveId string, moduleId string) *kurtosis_engine_rpc_api_bindings.GetModuleInfoArgs {
	return &kurtosis_engine_rpc_api_bindings.GetModuleInfoArgs{
		EnclaveId: enclaveId,
		ModuleId:  moduleId,
	}
}

func NewGetModuleInfoResponse(ipAddr string) *kurtosis_engine_rpc_api_bindings.GetModuleInfoResponse {
	return &kurtosis_engine_rpc_api_bindings.GetModuleInfoResponse{
		IpAddr: ipAddr,
	}
}

// ==============================================================================================
//                                       Register Files Artifacts
// ==============================================================================================
func NewRegisterFilesArtifactArgs(enclaveId string, filesArtifactUrls map[string]string) *kurtosis_engine_rpc_api_bindings.RegisterFilesArtifactsArgs {
	return &kurtosis_engine_rpc_api_bindings.RegisterFilesArtifactsArgs{
		EnclaveId:         enclaveId,
		FilesArtifactUrls: filesArtifactUrls,
	}
}

// ==============================================================================================
//                                     Register Service
// ==============================================================================================
func NewRegisterServiceArgs(enclaveId string, serviceId string, partitionId string) *kurtosis_engine_rpc_api_bindings.RegisterServiceArgs {
	return &kurtosis_engine_rpc_api_bindings.RegisterServiceArgs{
		EnclaveId:   enclaveId,
		ServiceId:   serviceId,
		PartitionId: partitionId,
	}
}

func NewRegisterServiceResponse(ipAddr string) *kurtosis_engine_rpc_api_bindings.RegisterServiceResponse {
	return &kurtosis_engine_rpc_api_bindings.RegisterServiceResponse{IpAddr: ipAddr}
}

// ==============================================================================================
//                                        Start Service
// ==============================================================================================
func NewStartServiceArgs(
		enclaveId string,
		serviceId string,
		image string,
		usedPorts map[string]bool,
		entrypointArgs []string,
		cmdArgs []string,
		envVars map[string]string,
		enclaveDataDirMntDirpath string,
		filesArtifactMountDirpaths map[string]string) *kurtosis_engine_rpc_api_bindings.StartServiceArgs {
	return &kurtosis_engine_rpc_api_bindings.StartServiceArgs{
		EnclaveId:                  enclaveId,
		ServiceId:                  serviceId,
		DockerImage:                image,
		UsedPorts:                  usedPorts,
		EntrypointArgs:             entrypointArgs,
		CmdArgs:                    cmdArgs,
		DockerEnvVars:              envVars,
		EnclaveDataDirMntDirpath:   enclaveDataDirMntDirpath,
		FilesArtifactMountDirpaths: filesArtifactMountDirpaths,
	}
}

func NewStartServiceResponse(usedPortsHostPortBindings map[string]*kurtosis_engine_rpc_api_bindings.PortBinding) *kurtosis_engine_rpc_api_bindings.StartServiceResponse {
	return &kurtosis_engine_rpc_api_bindings.StartServiceResponse{
		UsedPortsHostPortBindings: usedPortsHostPortBindings,
	}
}

func NewPortBinding(interfaceIp string, interfacePort string) *kurtosis_engine_rpc_api_bindings.PortBinding {
	return &kurtosis_engine_rpc_api_bindings.PortBinding{
		InterfaceIp:   interfaceIp,
		InterfacePort: interfacePort,
	}
}

// ==============================================================================================
//                                       Get Service Info
// ==============================================================================================
func NewGetServiceInfoArgs(enclaveId string, serviceId string) *kurtosis_engine_rpc_api_bindings.GetServiceInfoArgs {
	return &kurtosis_engine_rpc_api_bindings.GetServiceInfoArgs{
		EnclaveId: enclaveId,
		ServiceId: serviceId,
	}
}

func NewGetServiceInfoResponse(ipAddr string, enclaveDataDirMountDirpath string) *kurtosis_engine_rpc_api_bindings.GetServiceInfoResponse {
	return &kurtosis_engine_rpc_api_bindings.GetServiceInfoResponse{
		IpAddr:                        ipAddr,
		EnclaveDataDirMountDirpath: enclaveDataDirMountDirpath,
	}
}

// ==============================================================================================
//                                        Remove Service
// ==============================================================================================
func NewRemoveServiceArgs(enclaveId string, serviceId string, containerStopTimeoutSeconds uint64) *kurtosis_engine_rpc_api_bindings.RemoveServiceArgs {
	return &kurtosis_engine_rpc_api_bindings.RemoveServiceArgs{
		EnclaveId:                   enclaveId,
		ServiceId:                   serviceId,
		ContainerStopTimeoutSeconds: containerStopTimeoutSeconds,
	}
}

// ==============================================================================================
//                                          Repartition
// ==============================================================================================
func NewRepartitionArgs(
		enclaveId string,
		partitionServices map[string]*kurtosis_engine_rpc_api_bindings.PartitionServices,
		partitionConnections map[string]*kurtosis_engine_rpc_api_bindings.PartitionConnections,
		defaultConnection *kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo) *kurtosis_engine_rpc_api_bindings.RepartitionArgs {
	return &kurtosis_engine_rpc_api_bindings.RepartitionArgs{
		EnclaveId:            enclaveId,
		PartitionServices:    partitionServices,
		PartitionConnections: partitionConnections,
		DefaultConnection:    defaultConnection,
	}
}

func NewPartitionServices(serviceIdSet map[string]bool) *kurtosis_engine_rpc_api_bindings.PartitionServices {
	return &kurtosis_engine_rpc_api_bindings.PartitionServices{
		ServiceIdSet: serviceIdSet,
	}
}

func NewPartitionConnections(connectionInfo map[string]*kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo) *kurtosis_engine_rpc_api_bindings.PartitionConnections {
	return &kurtosis_engine_rpc_api_bindings.PartitionConnections{
		ConnectionInfo: connectionInfo,
	}
}

func NewPartitionConnectionInfo(isBlocked bool) *kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo {
	return &kurtosis_engine_rpc_api_bindings.PartitionConnectionInfo{
		IsBlocked: isBlocked,
	}
}

// ==============================================================================================
//                                          Exec Command
// ==============================================================================================
func NewExecCommandArgs(enclaveId string, serviceId string, commandArgs []string) *kurtosis_engine_rpc_api_bindings.ExecCommandArgs {
	return &kurtosis_engine_rpc_api_bindings.ExecCommandArgs{
		EnclaveId:   enclaveId,
		ServiceId:   serviceId,
		CommandArgs: commandArgs,
	}
}

func NewExecCommandResponse(exitCode int32, logOutput string) *kurtosis_engine_rpc_api_bindings.ExecCommandResponse {
	return &kurtosis_engine_rpc_api_bindings.ExecCommandResponse{
		ExitCode:  exitCode,
		LogOutput: logOutput,
	}
}

// ==============================================================================================
//                           Wait For Http Get Endpoint Availability
// ==============================================================================================
func NewWaitForHttpGetEndpointAvailabilityArgs(
	enclaveId string,
	serviceId string,
	port uint32,
	path string,
	initialDelayMilliseconds uint32,
	retries uint32,
	retriesDelayMilliseconds uint32,
	bodyText string,
) *kurtosis_engine_rpc_api_bindings.WaitForHttpGetEndpointAvailabilityArgs {
	return &kurtosis_engine_rpc_api_bindings.WaitForHttpGetEndpointAvailabilityArgs{
		EnclaveId:                enclaveId,
		ServiceId:                serviceId,
		Port:                     port,
		Path:                     path,
		InitialDelayMilliseconds: initialDelayMilliseconds,
		Retries:                  retries,
		RetriesDelayMilliseconds: retriesDelayMilliseconds,
		BodyText:                 bodyText,
	}
}

// ==============================================================================================
//                           Wait For Http Post Endpoint Availability
// ==============================================================================================
func NewWaitForHttpPostEndpointAvailabilityArgs(
	enclaveId string,
	serviceId string,
	port uint32,
	path string,
	requestBody string,
	initialDelayMilliseconds uint32,
	retries uint32,
	retriesDelayMilliseconds uint32,
	bodyText string,
) *kurtosis_engine_rpc_api_bindings.WaitForHttpPostEndpointAvailabilityArgs {
	return &kurtosis_engine_rpc_api_bindings.WaitForHttpPostEndpointAvailabilityArgs{
		EnclaveId:                enclaveId,
		ServiceId:                serviceId,
		Port:                     port,
		Path:                     path,
		RequestBody:              requestBody,
		InitialDelayMilliseconds: initialDelayMilliseconds,
		Retries:                  retries,
		RetriesDelayMilliseconds: retriesDelayMilliseconds,
		BodyText:                 bodyText,
	}
}

// ==============================================================================================
//                                      Execute Bulk Commands
// ==============================================================================================
func NewExecuteBulkCommandsArgs(enclaveId string, serializedCommands string) *kurtosis_engine_rpc_api_bindings.ExecuteBulkCommandsArgs {
	return &kurtosis_engine_rpc_api_bindings.ExecuteBulkCommandsArgs{
		EnclaveId:          enclaveId,
		SerializedCommands: serializedCommands,
	}
}

// ==============================================================================================
//                                       Get Services
// ==============================================================================================
func NewGetServicesArgs(enclaveId string) *kurtosis_engine_rpc_api_bindings.GetServicesArgs {
	return &kurtosis_engine_rpc_api_bindings.GetServicesArgs{
		EnclaveId: enclaveId,
	}
}

// ==============================================================================================
//                                       Get Modules
// ==============================================================================================
func NewGetModulesArgs(enclaveId string) *kurtosis_engine_rpc_api_bindings.GetModulesArgs {
	return &kurtosis_engine_rpc_api_bindings.GetModulesArgs{
		EnclaveId: enclaveId,
	}
}
