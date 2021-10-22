import {ApiContainerContext} from "../api_container_context/api_container_context";

export class EnclaveContext {
    private readonly enclaveId: string;
    private readonly networkId: string;
    private readonly networkCidr: string;
    private readonly apiContainerContext: ApiContainerContext;

    constructor(enclaveId: string, networkId: string, networkCidr: string, apiContainerContext: ApiContainerContext) {
        this.enclaveId = enclaveId;
        this.networkId = networkId;
        this.networkCidr = networkCidr;
        this.apiContainerContext = apiContainerContext;
    }

    public getEnclaveId(): string {
        return this.enclaveId;
    }

    public getNetworkId(): string {
        return this.networkId;
    }

    public getNetworkCidr(): string {
        return this.networkCidr;
    }

    public getApiContainerContext(): ApiContainerContext {
        return this.apiContainerContext;
    }
}
