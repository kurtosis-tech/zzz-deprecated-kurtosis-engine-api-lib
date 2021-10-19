// GENERATED CODE -- DO NOT EDIT!

// package: engine_api
// file: engine_service.proto

import * as engine_service_pb from "./engine_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IEngineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createEnclave: grpc.MethodDefinition<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
  getEnclave: grpc.MethodDefinition<engine_service_pb.GetEnclaveArgs, engine_service_pb.GetEnclaveResponse>;
  stopEnclave: grpc.MethodDefinition<engine_service_pb.StopEnclaveArgs, google_protobuf_empty_pb.Empty>;
  destroyEnclave: grpc.MethodDefinition<engine_service_pb.DestroyEnclaveArgs, google_protobuf_empty_pb.Empty>;
}

export const EngineServiceService: IEngineServiceService;

export interface IEngineServiceServer extends grpc.UntypedServiceImplementation {
  createEnclave: grpc.handleUnaryCall<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
  getEnclave: grpc.handleUnaryCall<engine_service_pb.GetEnclaveArgs, engine_service_pb.GetEnclaveResponse>;
  stopEnclave: grpc.handleUnaryCall<engine_service_pb.StopEnclaveArgs, google_protobuf_empty_pb.Empty>;
  destroyEnclave: grpc.handleUnaryCall<engine_service_pb.DestroyEnclaveArgs, google_protobuf_empty_pb.Empty>;
}

export class EngineServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  getEnclave(argument: engine_service_pb.GetEnclaveArgs, callback: grpc.requestCallback<engine_service_pb.GetEnclaveResponse>): grpc.ClientUnaryCall;
  getEnclave(argument: engine_service_pb.GetEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEnclaveResponse>): grpc.ClientUnaryCall;
  getEnclave(argument: engine_service_pb.GetEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEnclaveResponse>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
