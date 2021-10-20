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

func (A APIContainerContext) GetContainerID() string {
	return A.containerID
}

func (A APIContainerContext) GetIpInsideEnclave() string {
	return A.ipInsideEnclave
}

func (A APIContainerContext) GetPortInsideEnclave() uint32 {
	return A.portInsideEnclave
}

func (A APIContainerContext) GetIpOnHostMachine() string {
	return A.ipOnHostMachine
}

func (A APIContainerContext) GetPortOnHostMachine() uint32 {
	return A.portOnHostMachine
}



