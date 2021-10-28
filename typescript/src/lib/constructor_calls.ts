import {
    ExecCommandArgs,
    RegisterFilesArtifactsArgs,
    GetServiceInfoArgs,
    PartitionServices,
    PartitionConnections,
    PartitionConnectionInfo,
    RegisterServiceArgs,
    StartServiceArgs,
    RemoveServiceArgs,
    RepartitionArgs,
    WaitForHttpGetEndpointAvailabilityArgs,
    WaitForHttpPostEndpointAvailabilityArgs,
    ExecuteBulkCommandsArgs,
    LoadModuleArgs,
    UnloadModuleArgs,
    ExecuteModuleArgs,
    GetModuleInfoArgs,
    GetServicesArgs,
    GetModulesArgs
} from '../kurtosis_engine_rpc_api_bindings/engine_service_pb';
import { ServiceID } from './services/service';
import { PartitionID } from './networks/network_context';
import { ModuleID } from "./modules/module_context";
import * as jspb from "google-protobuf";

// // ====================================================================================================
// //                                    Kurtosis Context
// // ====================================================================================================

import {CreateEnclaveArgs, DestroyEnclaveArgs, StopEnclaveArgs} from "../kurtosis_engine_rpc_api_bindings/engine_service_pb";

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

export function newStopEnclaveArgs(enclaveId:string): DestroyEnclaveArgs {
    const result: StopEnclaveArgs = new StopEnclaveArgs();
    result.setEnclaveId(enclaveId);
    return result;
}

export function newDestroyEnclaveArgs(enclaveId:string): DestroyEnclaveArgs {
    const result: DestroyEnclaveArgs = new DestroyEnclaveArgs();
    result.setEnclaveId(enclaveId);
    return result;
}

// ==============================================================================================
//                                     Load Module
// ==============================================================================================
export function newLoadModuleArgs(enclaveId: string, moduleId: ModuleID, image: string, serializedParams: string): LoadModuleArgs {
    const result: LoadModuleArgs = new LoadModuleArgs();
    result.setEnclaveId(enclaveId);
    result.setModuleId(String(moduleId));
    result.setContainerImage(image);
    result.setSerializedParams(serializedParams);

    return result;
}

// ==============================================================================================
//                                     Unload Module
// ==============================================================================================
export function newUnloadModuleArgs(enclaveId: string, moduleId: ModuleID): UnloadModuleArgs {
    const result: UnloadModuleArgs = new UnloadModuleArgs();
    result.setEnclaveId(enclaveId);
    result.setModuleId(String(moduleId));

    return result;
}


// ==============================================================================================
//                                     Execute Module
// ==============================================================================================
export function newExecuteModuleArgs(enclaveId: string, moduleId: ModuleID, serializedParams: string): ExecuteModuleArgs {
    const result: ExecuteModuleArgs = new ExecuteModuleArgs();
    result.setEnclaveId(enclaveId);
    result.setModuleId(String(moduleId));
    result.setSerializedParams(serializedParams);

    return result;
}


// ==============================================================================================
//                                     Get Module Info
// ==============================================================================================
export function newGetModuleInfoArgs(enclaveId: string, moduleId: ModuleID): GetModuleInfoArgs {
    const result: GetModuleInfoArgs = new GetModuleInfoArgs();
    result.setEnclaveId(enclaveId);
    result.setModuleId(String(moduleId));

    return result;
}


// ==============================================================================================
//                                       Register Files Artifacts
// ==============================================================================================
export function newRegisterFilesArtifactsArgs(enclaveId: string, filesArtifactIdStrsToUrls: Map<string, string>): RegisterFilesArtifactsArgs {
    const result: RegisterFilesArtifactsArgs = new RegisterFilesArtifactsArgs();
    result.setEnclaveId(enclaveId);
    const filesArtifactUrlsMap: jspb.Map<string, string> = result.getFilesArtifactUrlsMap();
    for (const [artifactId, artifactUrl] of filesArtifactIdStrsToUrls.entries()) {
        filesArtifactUrlsMap.set(artifactId, artifactUrl);
    }
    return result;
}


// ==============================================================================================
//                                     Register Service
// ==============================================================================================
export function newRegisterServiceArgs(enclaveId: string, serviceId: ServiceID, partitionId: PartitionID): RegisterServiceArgs {
    const result: RegisterServiceArgs = new RegisterServiceArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(String(serviceId));
    result.setPartitionId(String(partitionId));

    return result;
}


// ==============================================================================================
//                                        Start Service
// ==============================================================================================
export function newStartServiceArgs(
        enclaveId: string, 
        serviceId: ServiceID, 
        dockerImage: string,
        usedPorts: Set<string>,
        entrypointArgs: string[],
        cmdArgs: string[],
        dockerEnvVars: Map<string, string>,
        enclaveDataDirMntDirpath: string,
        filesArtifactMountDirpaths: Map<string, string>): StartServiceArgs {
    const result: StartServiceArgs = new StartServiceArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(String(serviceId));
    result.setDockerImage(dockerImage);
    const usedPortsMap: jspb.Map<string, boolean> = result.getUsedPortsMap();
    for (const portId of usedPorts) {
        usedPortsMap.set(portId, true);
    }
    const entrypointArgsArray: string[] = result.getEntrypointArgsList();
    for (const entryPoint of entrypointArgs) {
        entrypointArgsArray.push(entryPoint);
    }
    const cmdArgsArray: string[] = result.getCmdArgsList();
    for (const cmdArg of cmdArgs) {
        cmdArgsArray.push(cmdArg);
    }
    const dockerEnvVarArray: jspb.Map<string, string> = result.getDockerEnvVarsMap();
    for (const [name, value] of dockerEnvVars.entries()) {
        dockerEnvVarArray.set(name, value);
    }
    result.setEnclaveDataDirMntDirpath(enclaveDataDirMntDirpath);
    const filesArtificatMountDirpathsMap: jspb.Map<string, string> = result.getFilesArtifactMountDirpathsMap();
    for (const [artifactId, mountDirpath] of filesArtifactMountDirpaths.entries()) {
        filesArtificatMountDirpathsMap.set(artifactId, mountDirpath);
    }

    return result;
}

// ==============================================================================================
//                                       Get Service Info
// ==============================================================================================
export function newGetServiceInfoArgs(enclaveId: string, serviceId: ServiceID): GetServiceInfoArgs{
    const result: GetServiceInfoArgs = new GetServiceInfoArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(String(serviceId));

    return result;
}


// ==============================================================================================
//                                        Remove Service
// ==============================================================================================
export function newRemoveServiceArgs(enclaveId: string, serviceId: ServiceID, containerStopTimeoutSeconds: number): RemoveServiceArgs {
    const result: RemoveServiceArgs = new RemoveServiceArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(serviceId);
    result.setContainerStopTimeoutSeconds(containerStopTimeoutSeconds);

    return result;
}


// ==============================================================================================
//                                          Repartition
// ==============================================================================================
export function newRepartitionArgs(
        enclaveId: string, 
        partitionServices: Map<string, PartitionServices>, 
        partitionConns: Map<string, PartitionConnections>,
        defaultConnection: PartitionConnectionInfo): RepartitionArgs {
    const result: RepartitionArgs = new RepartitionArgs();
    result.setEnclaveId(enclaveId);
    const partitionServicesMap: jspb.Map<string, PartitionServices> = result.getPartitionServicesMap();
    for (const [partitionServiceId, partitionId] of partitionServices.entries()) {
        partitionServicesMap.set(partitionServiceId, partitionId);
    };
    const partitionConnsMap: jspb.Map<string, PartitionConnections> = result.getPartitionConnectionsMap();
    for (const [partitionConnId, partitionConn] of partitionConns.entries()) {
        partitionConnsMap.set(partitionConnId, partitionConn);
    };
    result.setDefaultConnection(defaultConnection);

    return result;
}

export function newPartitionServices(serviceIdStrSet: Set<string>): PartitionServices{
    const result: PartitionServices = new PartitionServices();
    const partitionServicesMap: jspb.Map<string, boolean> = result.getServiceIdSetMap();
    for (const serviceIdStr of serviceIdStrSet) {
        partitionServicesMap.set(serviceIdStr, true);
    }

    return result;
}


export function newPartitionConnections(allConnectionInfo: Map<string, PartitionConnectionInfo>): PartitionConnections {
    const result: PartitionConnections = new PartitionConnections();
    const partitionsMap: jspb.Map<string, PartitionConnectionInfo> = result.getConnectionInfoMap();
    for (const [partitionId, connectionInfo] of allConnectionInfo.entries()) {
        partitionsMap.set(partitionId, connectionInfo);
    }

    return result;
}

// ==============================================================================================
//                                          Exec Command
// ==============================================================================================
export function newExecCommandArgs(enclaveId: string, serviceId: ServiceID, command: string[]): ExecCommandArgs {
    const result: ExecCommandArgs = new ExecCommandArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(serviceId);
    result.setCommandArgsList(command);

    return result;
}


// ==============================================================================================
//                           Wait For Http Get Endpoint Availability
// ==============================================================================================
export function newWaitForHttpGetEndpointAvailabilityArgs(
        enclaveId: string, 
        serviceId: ServiceID,
        port: number, 
        path: string,
        initialDelayMilliseconds: number, 
        retries: number, 
        retriesDelayMilliseconds: number, 
        bodyText: string): WaitForHttpGetEndpointAvailabilityArgs {
    const result: WaitForHttpGetEndpointAvailabilityArgs = new WaitForHttpGetEndpointAvailabilityArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(String(serviceId));
    result.setPort(port);
    result.setPath(path);
    result.setInitialDelayMilliseconds(initialDelayMilliseconds);
    result.setRetries(retries);
    result.setRetriesDelayMilliseconds(retriesDelayMilliseconds);
    result.setBodyText(bodyText);

    return result;
}

// ==============================================================================================
//                           Wait For Http Post Endpoint Availability
// ==============================================================================================
export function newWaitForHttpPostEndpointAvailabilityArgs(
        enclaveId: string, 
        serviceId: ServiceID,
        port: number, 
        path: string,
        requestBody: string,
        initialDelayMilliseconds: number, 
        retries: number, 
        retriesDelayMilliseconds: number, 
        bodyText: string): WaitForHttpPostEndpointAvailabilityArgs {
    const result: WaitForHttpPostEndpointAvailabilityArgs = new WaitForHttpPostEndpointAvailabilityArgs();
    result.setEnclaveId(enclaveId);
    result.setServiceId(String(serviceId));
    result.setPort(port);
    result.setPath(path);
    result.setRequestBody(requestBody)
    result.setInitialDelayMilliseconds(initialDelayMilliseconds);
    result.setRetries(retries);
    result.setRetriesDelayMilliseconds(retriesDelayMilliseconds);
    result.setBodyText(bodyText);

    return result;
}

// ==============================================================================================
//                                      Execute Bulk Commands
// ==============================================================================================
export function newExecuteBulkCommandsArgs(enclaveId: string, serializedCommands: string): ExecuteBulkCommandsArgs {
    const result: ExecuteBulkCommandsArgs = new ExecuteBulkCommandsArgs();
    result.setEnclaveId(enclaveId);
    result.setSerializedCommands(serializedCommands);

    return result;
}


// ==============================================================================================
//                                          Get Services
// ==============================================================================================
export function newGetServicesArgs(enclaveId: string): GetServicesArgs {
    const result: GetServicesArgs = new GetServicesArgs();
    result.setEnclaveId(enclaveId);
    return result;
}

// ==============================================================================================
//                                          Get Modules
// ==============================================================================================
export function newGetModulesArgs(enclaveId: string): GetServicesArgs {
    const result: GetModulesArgs = new GetModulesArgs();
    result.setEnclaveId(enclaveId);
    return result;
}