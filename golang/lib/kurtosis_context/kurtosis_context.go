package kurtosis_context

import (
	"context"
	"fmt"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_server_rpc_api_consts"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/api_container_context"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/enclave_context"
	"google.golang.org/grpc"
	"github.com/palantir/stacktrace"
)

const (
	localHostIPAddressStr = "0.0.0.0"
)

type KurtosisContext struct {
	client kurtosis_engine_rpc_api_bindings.EngineServiceClient
}

func NewKurtosisContext() (*KurtosisContext, error) {
	kurtosisEngineSocketStr := fmt.Sprintf("%v:%v", localHostIPAddressStr, kurtosis_engine_server_rpc_api_consts.ListenPort)

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
		return nil, stacktrace.Propagate(err, "An error occurred creating an enclave, make sure that you already started Kurtosis Engine Sever with `kurtosis engine start` command")
	}

	apiContainerContext := api_container_context.NewAPIContainerContext(
		response.ApiContainerId,
		response.ApiContainerIpInsideNetwork,
		response.ApiContainerHostIp,
		response.ApiContainerHostPort)

	enclaveContext := enclave_context.NewEnclaveContext(
		enclaveId,
		response.NetworkId,
		response.NetworkCidr,
		apiContainerContext)

	return enclaveContext, nil
}