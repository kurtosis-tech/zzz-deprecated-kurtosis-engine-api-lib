
export class APIContainerContext {
    private readonly _apiContainerID: string;
    private readonly _ipInsideNetwork: string;
    private readonly _hostIP: string;
    private readonly _hostPort: string;

    constructor(apiContainerID: string, ipInsideNetwork: string, hostIP: string, hostPort: string) {
        this._apiContainerID = apiContainerID;
        this._ipInsideNetwork = ipInsideNetwork;
        this._hostIP = hostIP;
        this._hostPort = hostPort;
    }

    public getApiContainerID(): string {
        return this._apiContainerID;
    }

    public getIpInsideNetwork(): string {
        return this._ipInsideNetwork;
    }

    public getHostIP(): string {
        return this._hostIP;
    }

    public getHostPort(): string {
        return this._hostPort;
    }
}
