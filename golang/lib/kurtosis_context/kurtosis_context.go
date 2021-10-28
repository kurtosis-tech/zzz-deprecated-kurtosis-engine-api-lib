package kurtosis_context

import (
	"context"
	"fmt"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_consts"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/api_container_context"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/enclave_context"
	"github.com/kurtosis-tech/stacktrace"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

const (
	localHostIPAddressStr = "0.0.0.0"
)

type KurtosisContext struct {
	client kurtosis_engine_rpc_api_bindings.EngineServiceClient
}

// NewKurtosisContextFromLocalEngine
// Attempts to create a KurtosisContext connected to a Kurtosis engine running locally
func NewKurtosisContextFromLocalEngine() (*KurtosisContext, error) {
	kurtosisEngineSocketStr := fmt.Sprintf("%v:%v", localHostIPAddressStr, kurtosis_engine_rpc_api_consts.ListenPort)

	// TODO SECURITY: Use HTTPS to ensure we're connecting to the real Kurtosis API servers
	conn, err := grpc.Dial(kurtosisEngineSocketStr, grpc.WithInsecure())
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating a connection to the Kurtosis Engine Server at '%v'",
			kurtosisEngineSocketStr,
		)
	}

	engineServiceClient := kurtosis_engine_rpc_api_bindings.NewEngineServiceClient(conn)

	kurtosisContext := &KurtosisContext{
		client: engineServiceClient,
	}

	return kurtosisContext, nil
}

func (kurtosisCtx *KurtosisContext) CreateEnclave(
	ctx context.Context,
	enclaveId string,
	apiContainerImage string,
	apiContainerLogLevel string,
	isPartitioningEnabled bool,
	shouldPublishPorts bool,
) (*enclave_context.EnclaveContext, error) {

	createEnclaveArgs := &kurtosis_engine_rpc_api_bindings.CreateEnclaveArgs{
		EnclaveId: enclaveId,
		ApiContainerImage: apiContainerImage,
		ApiContainerLogLevel: apiContainerLogLevel,
		IsPartitioningEnabled: isPartitioningEnabled,
		ShouldPublishAllPorts: shouldPublishPorts,
	}

	response, err := kurtosisCtx.client.CreateEnclave(ctx, createEnclaveArgs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred creating an enclave with ID '%v'", enclaveId)
	}

	enclaveContext, err := newEnclaveContextFromEnclaveInfo(response.EnclaveInfo)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred creating an enclave context from a newly-created enclave; this should never happen")
	}

	return enclaveContext, nil
}

func (kurtosisCtx *KurtosisContext) GetEnclaves(ctx context.Context) (map[string]*enclave_context.EnclaveContext, error) {

	response, err := kurtosisCtx.client.GetEnclaves(ctx, &emptypb.Empty{})
	if err != nil {
		return nil,
		stacktrace.Propagate(
			err,
			"An error occurred getting enclaves")
	}

	enclavesMap := newEnclaveContextMapFromEnclaveInfoMap(response.EnclaveInfo)

	return enclavesMap, nil
}

func (kurtosisCtx *KurtosisContext) StopEnclave(ctx context.Context, enclaveId string) error {
	stopEnclaveArgs := &kurtosis_engine_rpc_api_bindings.StopEnclaveArgs{EnclaveId: enclaveId}

	if _, err := kurtosisCtx.client.StopEnclave(ctx, stopEnclaveArgs); err != nil {
		return stacktrace.Propagate(err, "An error occurred stopping enclave with ID '%v'", enclaveId)
	}

	return nil
}

func (kurtosisCtx *KurtosisContext) DestroyEnclave(ctx context.Context, enclaveId string) error {
	destroyEnclaveArgs := &kurtosis_engine_rpc_api_bindings.DestroyEnclaveArgs{
		EnclaveId: enclaveId,
	}

	if _, err := kurtosisCtx.client.DestroyEnclave(ctx, destroyEnclaveArgs); err != nil {
		return stacktrace.Propagate(err, "An error occurred destroying enclave with ID '%v'", enclaveId)
	}

	return nil
}

// ====================================================================================================
// 									   Private helper methods
// ====================================================================================================
func newEnclaveContextMapFromEnclaveInfoMap(
		enclaveInfoMap map[string]*kurtosis_engine_rpc_api_bindings.EnclaveInfo,
		) map[string]*enclave_context.EnclaveContext {

	enclaveContextMap := map[string]*enclave_context.EnclaveContext{}
	for enclaveId, enclaveInfo := range enclaveInfoMap {
		enclaveContext, err := newEnclaveContextFromEnclaveInfo(enclaveInfo)
		if err != nil {
			// TODO This is really nasty - we skip enclaves that we can't create, and the only reason we wouldn't be able to create
			//  enclaves is because of stopped containers. Basically, we should move the API container into the engine-server, and
			//  make it impossible for enclaves to be in an invalid state at all
			continue
		}
		enclaveContextMap[enclaveId] = enclaveContext
	}

	return enclaveContextMap
}

func newEnclaveContextFromEnclaveInfo(
	enclaveInfo *kurtosis_engine_rpc_api_bindings.EnclaveInfo,
) (*enclave_context.EnclaveContext, error) {

	enclaveContainersStatus := enclaveInfo.GetContainersStatus()
	if enclaveContainersStatus != kurtosis_engine_rpc_api_bindings.EnclaveContainersStatus_EnclaveContainersStatus_RUNNING {
		return nil, stacktrace.NewError(
			"Enclave containers status was '%v', but we can't create an enclave context from a non-running enclave",
			enclaveContainersStatus,
		)
	}

	enclaveApiContainerStatus := enclaveInfo.GetApiContainerStatus()
	if enclaveApiContainerStatus != kurtosis_engine_rpc_api_bindings.EnclaveAPIContainerStatus_EnclaveAPIContainerStatus_RUNNING {
		return nil, stacktrace.NewError(
			"Enclave API container status was '%v', but we can't create an enclave context without a running API container",
			enclaveApiContainerStatus,
		)
	}

	apiContainerInfo := enclaveInfo.GetApiContainerInfo()
	if apiContainerInfo == nil {
		return nil, stacktrace.NewError("API container was listed as running, but no API container info exists")
	}
	apiContainerHostMachineInfo := enclaveInfo.GetApiContainerHostMachineInfo()
	if apiContainerHostMachineInfo == nil {
		return nil, stacktrace.NewError("API container was listed as running, but no API container host machine info exists")
	}


	apiContainerContext := api_container_context.NewAPIContainerContext(
		apiContainerInfo.GetContainerId(),
		apiContainerInfo.GetIpInsideEnclave(),
		apiContainerInfo.GetPortInsideEnclave(),
		apiContainerHostMachineInfo.GetIpOnHostMachine(),
		apiContainerHostMachineInfo.GetPortOnHostMachine(),
	)

	enclaveContext := enclave_context.NewEnclaveContext(
		enclaveInfo.GetEnclaveId(),
		enclaveInfo.GetNetworkId(),
		enclaveInfo.GetNetworkCidr(),
		apiContainerContext,
	)
	return enclaveContext, nil
}
