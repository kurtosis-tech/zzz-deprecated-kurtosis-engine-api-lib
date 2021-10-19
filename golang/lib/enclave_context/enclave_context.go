package enclave_context

import "github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/api_container_context"

type EnclaveContext struct {
	enclaveID string
	networkID string
	networkCIDR string
	apiContainerContext *api_container_context.APIContainerContext
}

func NewEnclaveContext(enclaveID string, networkID string, networkCIDR string, apiContainerContext *api_container_context.APIContainerContext) *EnclaveContext {
	return &EnclaveContext{enclaveID: enclaveID, networkID: networkID, networkCIDR: networkCIDR, apiContainerContext: apiContainerContext}
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
