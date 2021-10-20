package enclave_context

import (
	"github.com/kurtosis-tech/kurtosis-core/commons/object_name_providers"
	"github.com/kurtosis-tech/kurtosis-core/commons/object_labels_providers"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/api_container_context"
)

type EnclaveContext struct {
	enclaveID string
	networkID string
	networkCIDR string
	apiContainerContext *api_container_context.APIContainerContext
	objectNameProvider *object_name_providers.EnclaveObjectNameProvider
	objectLabelsProvider *object_labels_providers.EnclaveObjectLabelsProvider
}

func NewEnclaveContext(enclaveID string, networkID string, networkCIDR string, apiContainerContext *api_container_context.APIContainerContext) *EnclaveContext {

	enclaveObjNameProvider := object_name_providers.NewEnclaveObjectNameProvider(enclaveID)
	enclaveObjLabelsProvider := object_labels_providers.NewEnclaveObjectLabelsProvider(enclaveID)

	enclaveContext:= &EnclaveContext{
		enclaveID: enclaveID,
		networkID: networkID,
		networkCIDR: networkCIDR,
		apiContainerContext: apiContainerContext,
		objectNameProvider: enclaveObjNameProvider,
		objectLabelsProvider: enclaveObjLabelsProvider,
	}

	return enclaveContext
}

func (e EnclaveContext) GetEnclaveID() string {
	return e.enclaveID
}

func (e EnclaveContext) GetNetworkID() string {
	return e.networkID
}

func (e EnclaveContext) GetNetworkCIDR() string {
	return e.networkCIDR
}

func (e EnclaveContext) GetApiContainerContext() *api_container_context.APIContainerContext {
	return e.apiContainerContext
}

func (e EnclaveContext) GetObjectNameProvider() *object_name_providers.EnclaveObjectNameProvider {
	return e.objectNameProvider
}

func (e EnclaveContext) GetObjectLabelsProvider() *object_labels_providers.EnclaveObjectLabelsProvider {
	return e.objectLabelsProvider
}
