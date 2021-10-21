package api_container_context

type APIContainerContext struct {
	containerID  string
	ipInsideEnclave string
	portInsideEnclave uint32
	ipOnHostMachine string
	portOnHostMachine uint32
}

func NewAPIContainerContext(containerID string, ipInsideEnclave string, portInsideEnclave uint32, ipOnHostMachine string, portOnHostMachine uint32) *APIContainerContext {
	return &APIContainerContext{containerID: containerID, ipInsideEnclave: ipInsideEnclave, portInsideEnclave: portInsideEnclave, ipOnHostMachine: ipOnHostMachine, portOnHostMachine: portOnHostMachine}
}

func (apiContext APIContainerContext) GetContainerID() string {
	return apiContext.containerID
}

func (apiContext APIContainerContext) GetIPInsideEnclave() string {
	return apiContext.ipInsideEnclave
}

func (apiContext APIContainerContext) GetPortInsideEnclave() uint32 {
	return apiContext.portInsideEnclave
}

func (apiContext APIContainerContext) GetIPOnHostMachine() string {
	return apiContext.ipOnHostMachine
}

func (apiContext APIContainerContext) GetPortOnHostMachine() uint32 {
	return apiContext.portOnHostMachine
}



