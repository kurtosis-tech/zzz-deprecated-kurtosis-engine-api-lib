// GENERATED CODE -- DO NOT EDIT!

// package: engine_api
// file: engine_service.proto

import * as engine_service_pb from "./engine_service_pb";
import * as grpc from "grpc";

interface IEngineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEnclave: grpc.MethodDefinition<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
}

export const EngineServiceService: IEngineServiceService;

export interface IEngineServiceServer extends grpc.UntypedServiceImplementation {
  createEnclave: grpc.handleUnaryCall<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
}

export class EngineServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
}
