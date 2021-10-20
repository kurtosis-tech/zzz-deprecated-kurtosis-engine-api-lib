// // ====================================================================================================
// //                                    Kurtosis Context
// // ====================================================================================================

import {CreateEnclaveArgs} from "../kurtosis_engine_rpc_api_bindings/engine_service_pb";

export function newCreateEnclaveArgs(
        enclaveId: string,
        apiContainerImage: string,
        apiContainerLogLevel: string,
        isPartitioningEnabled: boolean,
        shouldPublishPorts: boolean): CreateEnclaveArgs {
    const result: CreateEnclaveArgs = new CreateEnclaveArgs();
    result.setEnclaveId(enclaveId);
    result.setApiContainerImage(apiContainerImage);
    result.setApiContainerLogLevel(apiContainerLogLevel);
    result.setIsPartitioningEnabled(isPartitioningEnabled);
    result.setShouldPublishAllPorts(shouldPublishPorts);

    return result;
}