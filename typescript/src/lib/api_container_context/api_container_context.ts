
// TODO Combine this into enclave context, now that enclave contexts can no longer be created if they don't have a valid API container!
export class ApiContainerContext {
    private readonly containerId:  string
    private readonly ipInsideEnclave: string
    private readonly portInsideEnclave: number
    private readonly ipOnHostMachine: string
    private readonly portOnHostMachine: number

    constructor(containerId: string, ipInsideEnclave: string, portInsideEnclave: number, ipOnHostMachine: string, portOnHostMachine: number) {
        this.containerId = containerId;
        this.ipInsideEnclave = ipInsideEnclave;
        this.portInsideEnclave = portInsideEnclave;
        this.ipOnHostMachine = ipOnHostMachine;
        this.portOnHostMachine = portOnHostMachine;
    }

    public getContainerId(): string {
        return this.containerId;
    }

    public getIpInsideEnclave(): string {
        return this.ipInsideEnclave;
    }

    public getPortInsideEnclave(): number {
        return this.portInsideEnclave;
    }

    public getIpOnHostMachine(): string {
        return this.ipOnHostMachine;
    }

    public getPortOnHostMachine(): number {
        return this.portOnHostMachine;
    }
}
