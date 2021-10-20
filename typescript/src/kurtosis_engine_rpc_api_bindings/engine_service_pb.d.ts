// package: engine_api
// file: engine_service.proto

import * as jspb from "google-protobuf";

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
  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkCidr(): string;
  setNetworkCidr(value: string): void;

  getApiContainerId(): string;
  setApiContainerId(value: string): void;

  getApiContainerIpInsideNetwork(): string;
  setApiContainerIpInsideNetwork(value: string): void;

  getApiContainerHostIp(): string;
  setApiContainerHostIp(value: string): void;

  getApiContainerHostPort(): string;
  setApiContainerHostPort(value: string): void;

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
    networkId: string,
    networkCidr: string,
    apiContainerId: string,
    apiContainerIpInsideNetwork: string,
    apiContainerHostIp: string,
    apiContainerHostPort: string,
  }
}

export class GetEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnclaveArgs): GetEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnclaveArgs;
  static deserializeBinaryFromReader(message: GetEnclaveArgs, reader: jspb.BinaryReader): GetEnclaveArgs;
}

export namespace GetEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class GetEnclaveResponse extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkCidr(): string;
  setNetworkCidr(value: string): void;

  getApiContainerId(): string;
  setApiContainerId(value: string): void;

  getApiContainerIpInsideNetwork(): string;
  setApiContainerIpInsideNetwork(value: string): void;

  getApiContainerHostIp(): string;
  setApiContainerHostIp(value: string): void;

  getApiContainerHostPort(): string;
  setApiContainerHostPort(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnclaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnclaveResponse): GetEnclaveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnclaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnclaveResponse;
  static deserializeBinaryFromReader(message: GetEnclaveResponse, reader: jspb.BinaryReader): GetEnclaveResponse;
}

export namespace GetEnclaveResponse {
  export type AsObject = {
    networkId: string,
    networkCidr: string,
    apiContainerId: string,
    apiContainerIpInsideNetwork: string,
    apiContainerHostIp: string,
    apiContainerHostPort: string,
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

