
export class APIContainerContext {
    private readonly containerID:  string
    private readonly ipInsideEnclave: string
    private readonly portInsideEnclave: number
    private readonly ipOnHostMachine: string
    private readonly portOnHostMachine: number

    constructor(containerID: string, ipInsideEnclave: string, portInsideEnclave: number, ipOnHostMachine: string, portOnHostMachine: number) {
        this.containerID = containerID;
        this.ipInsideEnclave = ipInsideEnclave;
        this.portInsideEnclave = portInsideEnclave;
        this.ipOnHostMachine = ipOnHostMachine;
        this.portOnHostMachine = portOnHostMachine;
    }

    public getContainerID(): string {
        return this.containerID;
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
