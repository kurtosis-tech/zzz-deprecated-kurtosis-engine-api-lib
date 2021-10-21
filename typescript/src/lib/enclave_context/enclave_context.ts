import {ApiContainerContext} from "../api_container_context/api_container_context";

export class EnclaveContext {
    private readonly enclaveId: string;
    private readonly networkId: string;
    private readonly networkCidr: string;
    private readonly apiContainerContext: ApiContainerContext | undefined;

    constructor(enclaveId: string, networkId: string, networkCidr: string, apiContainerContext: ApiContainerContext | undefined) {
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

    public getApiContainerContext(): ApiContainerContext | undefined {
        return this.apiContainerContext;
    }
}
