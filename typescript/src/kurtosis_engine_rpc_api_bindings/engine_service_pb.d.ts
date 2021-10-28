// package: engine_api
// file: engine_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetEngineInfoResponse extends jspb.Message {
  getEngineApiVersion(): string;
  setEngineApiVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEngineInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEngineInfoResponse): GetEngineInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEngineInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEngineInfoResponse;
  static deserializeBinaryFromReader(message: GetEngineInfoResponse, reader: jspb.BinaryReader): GetEngineInfoResponse;
}

export namespace GetEngineInfoResponse {
  export type AsObject = {
    engineApiVersion: string,
  }
}

export class CreateEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getApiContainerImage(): string;
  setApiContainerImage(value: string): void;

  getApiContainerLogLevel(): string;
  setApiContainerLogLevel(value: string): void;

  getIsPartitioningEnabled(): boolean;
  setIsPartitioningEnabled(value: boolean): void;

  getShouldPublishAllPorts(): boolean;
  setShouldPublishAllPorts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnclaveArgs): CreateEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnclaveArgs;
  static deserializeBinaryFromReader(message: CreateEnclaveArgs, reader: jspb.BinaryReader): CreateEnclaveArgs;
}

export namespace CreateEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
    apiContainerImage: string,
    apiContainerLogLevel: string,
    isPartitioningEnabled: boolean,
    shouldPublishAllPorts: boolean,
  }
}

export class CreateEnclaveResponse extends jspb.Message {
  hasEnclaveInfo(): boolean;
  clearEnclaveInfo(): void;
  getEnclaveInfo(): EnclaveInfo | undefined;
  setEnclaveInfo(value?: EnclaveInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnclaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnclaveResponse): CreateEnclaveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnclaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnclaveResponse;
  static deserializeBinaryFromReader(message: CreateEnclaveResponse, reader: jspb.BinaryReader): CreateEnclaveResponse;
}

export namespace CreateEnclaveResponse {
  export type AsObject = {
    enclaveInfo?: EnclaveInfo.AsObject,
  }
}

export class EnclaveAPIContainerInfo extends jspb.Message {
  getContainerId(): string;
  setContainerId(value: string): void;

  getIpInsideEnclave(): string;
  setIpInsideEnclave(value: string): void;

  getPortInsideEnclave(): number;
  setPortInsideEnclave(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnclaveAPIContainerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnclaveAPIContainerInfo): EnclaveAPIContainerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnclaveAPIContainerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnclaveAPIContainerInfo;
  static deserializeBinaryFromReader(message: EnclaveAPIContainerInfo, reader: jspb.BinaryReader): EnclaveAPIContainerInfo;
}

export namespace EnclaveAPIContainerInfo {
  export type AsObject = {
    containerId: string,
    ipInsideEnclave: string,
    portInsideEnclave: number,
  }
}

export class EnclaveAPIContainerHostMachineInfo extends jspb.Message {
  getIpOnHostMachine(): string;
  setIpOnHostMachine(value: string): void;

  getPortOnHostMachine(): number;
  setPortOnHostMachine(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnclaveAPIContainerHostMachineInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnclaveAPIContainerHostMachineInfo): EnclaveAPIContainerHostMachineInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnclaveAPIContainerHostMachineInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnclaveAPIContainerHostMachineInfo;
  static deserializeBinaryFromReader(message: EnclaveAPIContainerHostMachineInfo, reader: jspb.BinaryReader): EnclaveAPIContainerHostMachineInfo;
}

export namespace EnclaveAPIContainerHostMachineInfo {
  export type AsObject = {
    ipOnHostMachine: string,
    portOnHostMachine: number,
  }
}

export class EnclaveInfo extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkCidr(): string;
  setNetworkCidr(value: string): void;

  getContainersStatus(): EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap];
  setContainersStatus(value: EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap]): void;

  getApiContainerStatus(): EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap];
  setApiContainerStatus(value: EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap]): void;

  hasApiContainerInfo(): boolean;
  clearApiContainerInfo(): void;
  getApiContainerInfo(): EnclaveAPIContainerInfo | undefined;
  setApiContainerInfo(value?: EnclaveAPIContainerInfo): void;

  hasApiContainerHostMachineInfo(): boolean;
  clearApiContainerHostMachineInfo(): void;
  getApiContainerHostMachineInfo(): EnclaveAPIContainerHostMachineInfo | undefined;
  setApiContainerHostMachineInfo(value?: EnclaveAPIContainerHostMachineInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnclaveInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnclaveInfo): EnclaveInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnclaveInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnclaveInfo;
  static deserializeBinaryFromReader(message: EnclaveInfo, reader: jspb.BinaryReader): EnclaveInfo;
}

export namespace EnclaveInfo {
  export type AsObject = {
    enclaveId: string,
    networkId: string,
    networkCidr: string,
    containersStatus: EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap],
    apiContainerStatus: EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap],
    apiContainerInfo?: EnclaveAPIContainerInfo.AsObject,
    apiContainerHostMachineInfo?: EnclaveAPIContainerHostMachineInfo.AsObject,
  }
}

export class GetEnclavesResponse extends jspb.Message {
  getEnclaveInfoMap(): jspb.Map<string, EnclaveInfo>;
  clearEnclaveInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnclavesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnclavesResponse): GetEnclavesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnclavesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnclavesResponse;
  static deserializeBinaryFromReader(message: GetEnclavesResponse, reader: jspb.BinaryReader): GetEnclavesResponse;
}

export namespace GetEnclavesResponse {
  export type AsObject = {
    enclaveInfoMap: Array<[string, EnclaveInfo.AsObject]>,
  }
}

export class StopEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: StopEnclaveArgs): StopEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopEnclaveArgs;
  static deserializeBinaryFromReader(message: StopEnclaveArgs, reader: jspb.BinaryReader): StopEnclaveArgs;
}

export namespace StopEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class DestroyEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyEnclaveArgs): DestroyEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyEnclaveArgs;
  static deserializeBinaryFromReader(message: DestroyEnclaveArgs, reader: jspb.BinaryReader): DestroyEnclaveArgs;
}

export namespace DestroyEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class StartExternalContainerRegistrationResponse extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getRegistrationKey(): string;
  setRegistrationKey(value: string): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartExternalContainerRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartExternalContainerRegistrationResponse): StartExternalContainerRegistrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartExternalContainerRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartExternalContainerRegistrationResponse;
  static deserializeBinaryFromReader(message: StartExternalContainerRegistrationResponse, reader: jspb.BinaryReader): StartExternalContainerRegistrationResponse;
}

export namespace StartExternalContainerRegistrationResponse {
  export type AsObject = {
    enclaveId: string,
    registrationKey: string,
    ipAddr: string,
  }
}

export class FinishExternalContainerRegistrationArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getRegistrationKey(): string;
  setRegistrationKey(value: string): void;

  getContainerId(): string;
  setContainerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishExternalContainerRegistrationArgs.AsObject;
  static toObject(includeInstance: boolean, msg: FinishExternalContainerRegistrationArgs): FinishExternalContainerRegistrationArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinishExternalContainerRegistrationArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishExternalContainerRegistrationArgs;
  static deserializeBinaryFromReader(message: FinishExternalContainerRegistrationArgs, reader: jspb.BinaryReader): FinishExternalContainerRegistrationArgs;
}

export namespace FinishExternalContainerRegistrationArgs {
  export type AsObject = {
    enclaveId: string,
    registrationKey: string,
    containerId: string,
  }
}

export class LoadModuleArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  getContainerImwge(): string;
  setContainerImwge(value: string): void;

  getSerializedParams(): string;
  setSerializedParams(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadModuleArgs.AsObject;
  static toObject(includeInstance: boolean, msg: LoadModuleArgs): LoadModuleArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadModuleArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadModuleArgs;
  static deserializeBinaryFromReader(message: LoadModuleArgs, reader: jspb.BinaryReader): LoadModuleArgs;
}

export namespace LoadModuleArgs {
  export type AsObject = {
    enclaveId: string,
    moduleId: string,
    containerImwge: string,
    serializedParams: string,
  }
}

export class UnloadModuleArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnloadModuleArgs.AsObject;
  static toObject(includeInstance: boolean, msg: UnloadModuleArgs): UnloadModuleArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnloadModuleArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnloadModuleArgs;
  static deserializeBinaryFromReader(message: UnloadModuleArgs, reader: jspb.BinaryReader): UnloadModuleArgs;
}

export namespace UnloadModuleArgs {
  export type AsObject = {
    enclaveId: string,
    moduleId: string,
  }
}

export class ExecuteModuleArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  getSerializedParams(): string;
  setSerializedParams(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteModuleArgs.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteModuleArgs): ExecuteModuleArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteModuleArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteModuleArgs;
  static deserializeBinaryFromReader(message: ExecuteModuleArgs, reader: jspb.BinaryReader): ExecuteModuleArgs;
}

export namespace ExecuteModuleArgs {
  export type AsObject = {
    enclaveId: string,
    moduleId: string,
    serializedParams: string,
  }
}

export class ExecuteModuleResponse extends jspb.Message {
  getSerializedResult(): string;
  setSerializedResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteModuleResponse): ExecuteModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteModuleResponse;
  static deserializeBinaryFromReader(message: ExecuteModuleResponse, reader: jspb.BinaryReader): ExecuteModuleResponse;
}

export namespace ExecuteModuleResponse {
  export type AsObject = {
    serializedResult: string,
  }
}

export class GetModuleInfoArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleInfoArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleInfoArgs): GetModuleInfoArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleInfoArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleInfoArgs;
  static deserializeBinaryFromReader(message: GetModuleInfoArgs, reader: jspb.BinaryReader): GetModuleInfoArgs;
}

export namespace GetModuleInfoArgs {
  export type AsObject = {
    enclaveId: string,
    moduleId: string,
  }
}

export class GetModuleInfoResponse extends jspb.Message {
  getIpAddr(): string;
  setIpAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleInfoResponse): GetModuleInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleInfoResponse;
  static deserializeBinaryFromReader(message: GetModuleInfoResponse, reader: jspb.BinaryReader): GetModuleInfoResponse;
}

export namespace GetModuleInfoResponse {
  export type AsObject = {
    ipAddr: string,
  }
}

export class RegisterFilesArtifactsArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getFilesArtifactUrlsMap(): jspb.Map<string, string>;
  clearFilesArtifactUrlsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterFilesArtifactsArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterFilesArtifactsArgs): RegisterFilesArtifactsArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterFilesArtifactsArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterFilesArtifactsArgs;
  static deserializeBinaryFromReader(message: RegisterFilesArtifactsArgs, reader: jspb.BinaryReader): RegisterFilesArtifactsArgs;
}

export namespace RegisterFilesArtifactsArgs {
  export type AsObject = {
    enclaveId: string,
    filesArtifactUrlsMap: Array<[string, string]>,
  }
}

export class RegisterServiceArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getPartitionId(): string;
  setPartitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServiceArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServiceArgs): RegisterServiceArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServiceArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServiceArgs;
  static deserializeBinaryFromReader(message: RegisterServiceArgs, reader: jspb.BinaryReader): RegisterServiceArgs;
}

export namespace RegisterServiceArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    partitionId: string,
  }
}

export class RegisterServiceResponse extends jspb.Message {
  getIpAddr(): string;
  setIpAddr(value: string): void;

  getRelativeServiceDirpath(): string;
  setRelativeServiceDirpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServiceResponse): RegisterServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServiceResponse;
  static deserializeBinaryFromReader(message: RegisterServiceResponse, reader: jspb.BinaryReader): RegisterServiceResponse;
}

export namespace RegisterServiceResponse {
  export type AsObject = {
    ipAddr: string,
    relativeServiceDirpath: string,
  }
}

export class StartServiceArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getDockerImage(): string;
  setDockerImage(value: string): void;

  getUsedPortsMap(): jspb.Map<string, boolean>;
  clearUsedPortsMap(): void;
  clearEntrypointArgsList(): void;
  getEntrypointArgsList(): Array<string>;
  setEntrypointArgsList(value: Array<string>): void;
  addEntrypointArgs(value: string, index?: number): string;

  clearCmdArgsList(): void;
  getCmdArgsList(): Array<string>;
  setCmdArgsList(value: Array<string>): void;
  addCmdArgs(value: string, index?: number): string;

  getDockerEnvVarsMap(): jspb.Map<string, string>;
  clearDockerEnvVarsMap(): void;
  getEnclaveDataDirMntDirpath(): string;
  setEnclaveDataDirMntDirpath(value: string): void;

  getFilesArtifactMountDirpathsMap(): jspb.Map<string, string>;
  clearFilesArtifactMountDirpathsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServiceArgs.AsObject;
  static toObject(includeInstance: boolean, msg: StartServiceArgs): StartServiceArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServiceArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServiceArgs;
  static deserializeBinaryFromReader(message: StartServiceArgs, reader: jspb.BinaryReader): StartServiceArgs;
}

export namespace StartServiceArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    dockerImage: string,
    usedPortsMap: Array<[string, boolean]>,
    entrypointArgsList: Array<string>,
    cmdArgsList: Array<string>,
    dockerEnvVarsMap: Array<[string, string]>,
    enclaveDataDirMntDirpath: string,
    filesArtifactMountDirpathsMap: Array<[string, string]>,
  }
}

export class StartServiceResponse extends jspb.Message {
  getUsedPortsHostPortBindingsMap(): jspb.Map<string, PortBinding>;
  clearUsedPortsHostPortBindingsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartServiceResponse): StartServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServiceResponse;
  static deserializeBinaryFromReader(message: StartServiceResponse, reader: jspb.BinaryReader): StartServiceResponse;
}

export namespace StartServiceResponse {
  export type AsObject = {
    usedPortsHostPortBindingsMap: Array<[string, PortBinding.AsObject]>,
  }
}

export class PortBinding extends jspb.Message {
  getInterfaceIp(): string;
  setInterfaceIp(value: string): void;

  getInterfacePort(): string;
  setInterfacePort(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortBinding.AsObject;
  static toObject(includeInstance: boolean, msg: PortBinding): PortBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortBinding;
  static deserializeBinaryFromReader(message: PortBinding, reader: jspb.BinaryReader): PortBinding;
}

export namespace PortBinding {
  export type AsObject = {
    interfaceIp: string,
    interfacePort: string,
  }
}

export class GetServiceInfoArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceInfoArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceInfoArgs): GetServiceInfoArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceInfoArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceInfoArgs;
  static deserializeBinaryFromReader(message: GetServiceInfoArgs, reader: jspb.BinaryReader): GetServiceInfoArgs;
}

export namespace GetServiceInfoArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
  }
}

export class GetServiceInfoResponse extends jspb.Message {
  getIpAddr(): string;
  setIpAddr(value: string): void;

  getEnclaveDataDirMountDirpath(): string;
  setEnclaveDataDirMountDirpath(value: string): void;

  getRelativeServiceDirpath(): string;
  setRelativeServiceDirpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceInfoResponse): GetServiceInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceInfoResponse;
  static deserializeBinaryFromReader(message: GetServiceInfoResponse, reader: jspb.BinaryReader): GetServiceInfoResponse;
}

export namespace GetServiceInfoResponse {
  export type AsObject = {
    ipAddr: string,
    enclaveDataDirMountDirpath: string,
    relativeServiceDirpath: string,
  }
}

export class RemoveServiceArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getContainerStopTimeoutSeconds(): number;
  setContainerStopTimeoutSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveServiceArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveServiceArgs): RemoveServiceArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveServiceArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveServiceArgs;
  static deserializeBinaryFromReader(message: RemoveServiceArgs, reader: jspb.BinaryReader): RemoveServiceArgs;
}

export namespace RemoveServiceArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    containerStopTimeoutSeconds: number,
  }
}

export class RepartitionArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getPartitionServicesMap(): jspb.Map<string, PartitionServices>;
  clearPartitionServicesMap(): void;
  getPartitionConnectionsMap(): jspb.Map<string, PartitionConnections>;
  clearPartitionConnectionsMap(): void;
  hasDefaultConnection(): boolean;
  clearDefaultConnection(): void;
  getDefaultConnection(): PartitionConnectionInfo | undefined;
  setDefaultConnection(value?: PartitionConnectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepartitionArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RepartitionArgs): RepartitionArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepartitionArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepartitionArgs;
  static deserializeBinaryFromReader(message: RepartitionArgs, reader: jspb.BinaryReader): RepartitionArgs;
}

export namespace RepartitionArgs {
  export type AsObject = {
    enclaveId: string,
    partitionServicesMap: Array<[string, PartitionServices.AsObject]>,
    partitionConnectionsMap: Array<[string, PartitionConnections.AsObject]>,
    defaultConnection?: PartitionConnectionInfo.AsObject,
  }
}

export class PartitionServices extends jspb.Message {
  getServiceIdSetMap(): jspb.Map<string, boolean>;
  clearServiceIdSetMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionServices.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionServices): PartitionServices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionServices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionServices;
  static deserializeBinaryFromReader(message: PartitionServices, reader: jspb.BinaryReader): PartitionServices;
}

export namespace PartitionServices {
  export type AsObject = {
    serviceIdSetMap: Array<[string, boolean]>,
  }
}

export class PartitionConnections extends jspb.Message {
  getConnectionInfoMap(): jspb.Map<string, PartitionConnectionInfo>;
  clearConnectionInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionConnections.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionConnections): PartitionConnections.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionConnections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionConnections;
  static deserializeBinaryFromReader(message: PartitionConnections, reader: jspb.BinaryReader): PartitionConnections;
}

export namespace PartitionConnections {
  export type AsObject = {
    connectionInfoMap: Array<[string, PartitionConnectionInfo.AsObject]>,
  }
}

export class PartitionConnectionInfo extends jspb.Message {
  getIsBlocked(): boolean;
  setIsBlocked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionConnectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionConnectionInfo): PartitionConnectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionConnectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionConnectionInfo;
  static deserializeBinaryFromReader(message: PartitionConnectionInfo, reader: jspb.BinaryReader): PartitionConnectionInfo;
}

export namespace PartitionConnectionInfo {
  export type AsObject = {
    isBlocked: boolean,
  }
}

export class ExecCommandArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  clearCommandArgsList(): void;
  getCommandArgsList(): Array<string>;
  setCommandArgsList(value: Array<string>): void;
  addCommandArgs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecCommandArgs.AsObject;
  static toObject(includeInstance: boolean, msg: ExecCommandArgs): ExecCommandArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecCommandArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecCommandArgs;
  static deserializeBinaryFromReader(message: ExecCommandArgs, reader: jspb.BinaryReader): ExecCommandArgs;
}

export namespace ExecCommandArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    commandArgsList: Array<string>,
  }
}

export class ExecCommandResponse extends jspb.Message {
  getExitCode(): number;
  setExitCode(value: number): void;

  getLogOutput(): string;
  setLogOutput(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecCommandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecCommandResponse): ExecCommandResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecCommandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecCommandResponse;
  static deserializeBinaryFromReader(message: ExecCommandResponse, reader: jspb.BinaryReader): ExecCommandResponse;
}

export namespace ExecCommandResponse {
  export type AsObject = {
    exitCode: number,
    logOutput: string,
  }
}

export class WaitForHttpGetEndpointAvailabilityArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getInitialDelayMilliseconds(): number;
  setInitialDelayMilliseconds(value: number): void;

  getRetries(): number;
  setRetries(value: number): void;

  getRetriesDelayMilliseconds(): number;
  setRetriesDelayMilliseconds(value: number): void;

  getBodyText(): string;
  setBodyText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitForHttpGetEndpointAvailabilityArgs.AsObject;
  static toObject(includeInstance: boolean, msg: WaitForHttpGetEndpointAvailabilityArgs): WaitForHttpGetEndpointAvailabilityArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitForHttpGetEndpointAvailabilityArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitForHttpGetEndpointAvailabilityArgs;
  static deserializeBinaryFromReader(message: WaitForHttpGetEndpointAvailabilityArgs, reader: jspb.BinaryReader): WaitForHttpGetEndpointAvailabilityArgs;
}

export namespace WaitForHttpGetEndpointAvailabilityArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    port: number,
    path: string,
    initialDelayMilliseconds: number,
    retries: number,
    retriesDelayMilliseconds: number,
    bodyText: string,
  }
}

export class WaitForHttpPostEndpointAvailabilityArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getRequestBody(): string;
  setRequestBody(value: string): void;

  getInitialDelayMilliseconds(): number;
  setInitialDelayMilliseconds(value: number): void;

  getRetries(): number;
  setRetries(value: number): void;

  getRetriesDelayMilliseconds(): number;
  setRetriesDelayMilliseconds(value: number): void;

  getBodyText(): string;
  setBodyText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitForHttpPostEndpointAvailabilityArgs.AsObject;
  static toObject(includeInstance: boolean, msg: WaitForHttpPostEndpointAvailabilityArgs): WaitForHttpPostEndpointAvailabilityArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitForHttpPostEndpointAvailabilityArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitForHttpPostEndpointAvailabilityArgs;
  static deserializeBinaryFromReader(message: WaitForHttpPostEndpointAvailabilityArgs, reader: jspb.BinaryReader): WaitForHttpPostEndpointAvailabilityArgs;
}

export namespace WaitForHttpPostEndpointAvailabilityArgs {
  export type AsObject = {
    enclaveId: string,
    serviceId: string,
    port: number,
    path: string,
    requestBody: string,
    initialDelayMilliseconds: number,
    retries: number,
    retriesDelayMilliseconds: number,
    bodyText: string,
  }
}

export class ExecuteBulkCommandsArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getSerializedCommands(): string;
  setSerializedCommands(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBulkCommandsArgs.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBulkCommandsArgs): ExecuteBulkCommandsArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBulkCommandsArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBulkCommandsArgs;
  static deserializeBinaryFromReader(message: ExecuteBulkCommandsArgs, reader: jspb.BinaryReader): ExecuteBulkCommandsArgs;
}

export namespace ExecuteBulkCommandsArgs {
  export type AsObject = {
    enclaveId: string,
    serializedCommands: string,
  }
}

export class GetServicesArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesArgs): GetServicesArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesArgs;
  static deserializeBinaryFromReader(message: GetServicesArgs, reader: jspb.BinaryReader): GetServicesArgs;
}

export namespace GetServicesArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class GetServicesResponse extends jspb.Message {
  getServiceIdsMap(): jspb.Map<string, boolean>;
  clearServiceIdsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesResponse): GetServicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesResponse;
  static deserializeBinaryFromReader(message: GetServicesResponse, reader: jspb.BinaryReader): GetServicesResponse;
}

export namespace GetServicesResponse {
  export type AsObject = {
    serviceIdsMap: Array<[string, boolean]>,
  }
}

export class GetModulesArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModulesArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetModulesArgs): GetModulesArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModulesArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModulesArgs;
  static deserializeBinaryFromReader(message: GetModulesArgs, reader: jspb.BinaryReader): GetModulesArgs;
}

export namespace GetModulesArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class GetModulesResponse extends jspb.Message {
  getModuleIdsMap(): jspb.Map<string, boolean>;
  clearModuleIdsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModulesResponse): GetModulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModulesResponse;
  static deserializeBinaryFromReader(message: GetModulesResponse, reader: jspb.BinaryReader): GetModulesResponse;
}

export namespace GetModulesResponse {
  export type AsObject = {
    moduleIdsMap: Array<[string, boolean]>,
  }
}

export interface EnclaveContainersStatusMap {
  ENCLAVECONTAINERSSTATUS_EMPTY: 0;
  ENCLAVECONTAINERSSTATUS_RUNNING: 1;
  ENCLAVECONTAINERSSTATUS_STOPPED: 2;
}

export const EnclaveContainersStatus: EnclaveContainersStatusMap;

export interface EnclaveAPIContainerStatusMap {
  ENCLAVEAPICONTAINERSTATUS_NONEXISTENT: 0;
  ENCLAVEAPICONTAINERSTATUS_RUNNING: 1;
  ENCLAVEAPICONTAINERSTATUS_STOPPED: 2;
}

export const EnclaveAPIContainerStatus: EnclaveAPIContainerStatusMap;

