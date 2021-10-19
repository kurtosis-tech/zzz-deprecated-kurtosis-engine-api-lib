package api_container_context

type APIContainerContext struct {
	aPIContainerID string
	ipInsideNetwork string
	hostIp string
	hostPort string
}

func NewAPIContainerContext(aPIContainerID string, ipInsideNetwork string, hostIp string, hostPort string) *APIContainerContext {
	return &APIContainerContext{aPIContainerID: aPIContainerID, ipInsideNetwork: ipInsideNetwork, hostIp: hostIp, hostPort: hostPort}
}

func (A APIContainerContext) GetAPIContainerID() string {
	return A.aPIContainerID
}

func (A APIContainerContext) GetIpInsideNetwork() string {
	return A.ipInsideNetwork
}

func (A APIContainerContext) GetHostIp() string {
	return A.hostIp
}

func (A APIContainerContext) GetHostPort() string {
	return A.hostPort
}



