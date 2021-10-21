// // ====================================================================================================
// //                                    Kurtosis Context
// // ====================================================================================================

import {CreateEnclaveArgs, DestroyEnclaveArgs} from "../kurtosis_engine_rpc_api_bindings/engine_service_pb";

export function newCreateEnclaveArgs(
        enclaveId: string,
        apiContainerImage: string,
        apiContainerLogLevel: string,
        isPartitioningEnabled: boolean,
        shouldPublishPorts: boolean): CreateEnclaveArgs {
    let result: CreateEnclaveArgs = new CreateEnclaveArgs();
    result.setEnclaveId(enclaveId);
    result.setApiContainerImage(apiContainerImage);
    result.setApiContainerLogLevel(apiContainerLogLevel);
    result.setIsPartitioningEnabled(isPartitioningEnabled);
    result.setShouldPublishAllPorts(shouldPublishPorts);

    return result;
}

export function newDestroyEnclaveArgs(enclaveId:string): DestroyEnclaveArgs {
    let result: DestroyEnclaveArgs = new DestroyEnclaveArgs();
    result.setEnclaveId(enclaveId);

    return result;
}
