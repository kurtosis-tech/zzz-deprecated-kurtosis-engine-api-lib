import {APIContainerContext} from "../api_container_context/api_container_context";

export class EnclaveContext {
    private readonly _enclaveID: string;
    private readonly _networkID: string;
    private readonly _networkCIDR: string;
    private readonly _apiContainerContext: APIContainerContext;

    constructor(enclaveID: string, networkID: string, networkCIDR: string, apiContainerContext: APIContainerContext) {
        this._enclaveID = enclaveID;
        this._networkID = networkID;
        this._networkCIDR = networkCIDR;
        this._apiContainerContext = apiContainerContext;
    }

    public getEnclaveID(): string {
        return this._enclaveID;
    }

    public getNetworkID(): string {
        return this._networkID;
    }

    public getNetworkCIDR(): string {
        return this._networkCIDR;
    }

    public getApiContainerContext(): APIContainerContext {
        return this._apiContainerContext;
    }
}
