package kurtosis_context

import (
	"context"
	"fmt"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_consts"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/api_container_context"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/enclave_context"
	"github.com/palantir/stacktrace"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

const (
	localHostIPAddressStr = "0.0.0.0"
)

type KurtosisContext struct {
	client kurtosis_engine_rpc_api_bindings.EngineServiceClient
}

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
		enclaveId string,
		apiContainerImage string,
		apiContainerLogLevel string,
		isPartitioningEnabled bool,
		shouldPublishPorts bool) (*enclave_context.EnclaveContext, error) {

	createEnclaveArgs := &kurtosis_engine_rpc_api_bindings.CreateEnclaveArgs{
		EnclaveId: enclaveId,
		ApiContainerImage: apiContainerImage,
		ApiContainerLogLevel: apiContainerLogLevel,
		IsPartitioningEnabled: isPartitioningEnabled,
		ShouldPublishAllPorts: shouldPublishPorts,
	}

	response, err := kurtosisCtx.client.CreateEnclave(context.Background(), createEnclaveArgs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred creating an enclave with ID '%v'", enclaveId)
	}

	enclaveContext := newEnclaveContextFromEnclaveInfo(response.EnclaveInfo)

	return enclaveContext, nil
}

func (kurtosisCtx *KurtosisContext) GetEnclaves() (map[string]*enclave_context.EnclaveContext, error) {

	response, err := kurtosisCtx.client.GetEnclaves(context.Background(), &emptypb.Empty{})
	if err != nil {
		return nil,
		stacktrace.Propagate(
			err,
			"An error occurred getting enclaves")
	}

	enclavesMap := newEnclaveContextMapFromEnclaveInfoMap(response.EnclaveInfo)

	return enclavesMap, nil
}

func (kurtosisCtx *KurtosisContext) DestroyEnclave(enclaveId string) error {
	destroyEnclaveArgs := &kurtosis_engine_rpc_api_bindings.DestroyEnclaveArgs{
		EnclaveId: enclaveId,
	}

	if _, err := kurtosisCtx.client.DestroyEnclave(context.Background(), destroyEnclaveArgs); err != nil {
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

	var enclaveContextMap map[string]*enclave_context.EnclaveContext

	for enclaveId, enclaveInfo := range enclaveInfoMap {

		enclaveContext := newEnclaveContextFromEnclaveInfo(enclaveInfo)

		enclaveContextMap[enclaveId] = enclaveContext
	}

	return enclaveContextMap
}

func newEnclaveContextFromEnclaveInfo(
		enclaveInfo *kurtosis_engine_rpc_api_bindings.EnclaveInfo) *enclave_context.EnclaveContext {

	apiContainerInfo := enclaveInfo.GetApiContainerInfo()

	var apiContainerContext *api_container_context.APIContainerContext

	apiContainerContext = api_container_context.NewAPIContainerContext(
		apiContainerInfo.GetContainerId(),
		apiContainerInfo.GetIpInsideEnclave(),
		apiContainerInfo.GetPortInsideEnclave(),
		apiContainerInfo.GetIpOnHostMachine(),
		apiContainerInfo.GetPortOnHostMachine())

	enclaveContext := enclave_context.NewEnclaveContext(
		enclaveInfo.GetEnclaveId(),
		enclaveInfo.GetNetworkId(),
		enclaveInfo.GetNetworkCidr(),
		apiContainerContext,
	)
	return enclaveContext
}
