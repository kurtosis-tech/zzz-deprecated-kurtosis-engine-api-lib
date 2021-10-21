import {APIContainerContext} from "../api_container_context/api_container_context";

export class EnclaveContext {
    private readonly enclaveID: string;
    private readonly networkID: string;
    private readonly networkCIDR: string;
    private readonly apiContainerContext: APIContainerContext | undefined;

    constructor(enclaveID: string, networkID: string, networkCIDR: string, apiContainerContext: APIContainerContext | undefined) {
        this.enclaveID = enclaveID;
        this.networkID = networkID;
        this.networkCIDR = networkCIDR;
        this.apiContainerContext = apiContainerContext;
    }

    public getEnclaveID(): string {
        return this.enclaveID;
    }

    public getNetworkID(): string {
        return this.networkID;
    }

    public getNetworkCIDR(): string {
        return this.networkCIDR;
    }

    public getApiContainerContext(): APIContainerContext | undefined {
        return this.apiContainerContext;
    }
}
