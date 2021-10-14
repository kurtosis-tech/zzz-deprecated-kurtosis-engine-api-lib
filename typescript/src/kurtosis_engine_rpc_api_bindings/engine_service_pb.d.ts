// package: engine_api
// file: engine_service.proto

import * as jspb from "google-protobuf";

export class CreateEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getApiContainerImage(): string;
  setApiContainerImage(value: string): void;

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
    isPartitioningEnabled: boolean,
    shouldPublishAllPorts: boolean,
  }
}

export class CreateEnclaveResponse extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkIp(): string;
  setNetworkIp(value: string): void;

  getApiContainerId(): string;
  setApiContainerId(value: string): void;

  getApiContainerIp(): string;
  setApiContainerIp(value: string): void;

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
    networkIp: string,
    apiContainerId: string,
    apiContainerIp: string,
    apiContainerHostIp: string,
    apiContainerHostPort: string,
  }
}

