// GENERATED CODE -- DO NOT EDIT!

// package: engine_api
// file: engine_service.proto

import * as engine_service_pb from "./engine_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IEngineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getEngineInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, engine_service_pb.GetEngineInfoResponse>;
  createEnclave: grpc.MethodDefinition<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
  getEnclaves: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, engine_service_pb.GetEnclavesResponse>;
  stopEnclave: grpc.MethodDefinition<engine_service_pb.StopEnclaveArgs, google_protobuf_empty_pb.Empty>;
  destroyEnclave: grpc.MethodDefinition<engine_service_pb.DestroyEnclaveArgs, google_protobuf_empty_pb.Empty>;
  startExternalContainerRegistration: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, engine_service_pb.StartExternalContainerRegistrationResponse>;
  finishExternalContainerRegistration: grpc.MethodDefinition<engine_service_pb.FinishExternalContainerRegistrationArgs, google_protobuf_empty_pb.Empty>;
  loadModule: grpc.MethodDefinition<engine_service_pb.LoadModuleArgs, google_protobuf_empty_pb.Empty>;
  unloadModule: grpc.MethodDefinition<engine_service_pb.UnloadModuleArgs, google_protobuf_empty_pb.Empty>;
  executeModule: grpc.MethodDefinition<engine_service_pb.ExecuteModuleArgs, engine_service_pb.ExecuteModuleResponse>;
  getModuleInfo: grpc.MethodDefinition<engine_service_pb.GetModuleInfoArgs, engine_service_pb.GetModuleInfoResponse>;
  registerFilesArtifacts: grpc.MethodDefinition<engine_service_pb.RegisterFilesArtifactsArgs, google_protobuf_empty_pb.Empty>;
  registerService: grpc.MethodDefinition<engine_service_pb.RegisterServiceArgs, engine_service_pb.RegisterServiceResponse>;
  startService: grpc.MethodDefinition<engine_service_pb.StartServiceArgs, engine_service_pb.StartServiceResponse>;
  getServiceInfo: grpc.MethodDefinition<engine_service_pb.GetServiceInfoArgs, engine_service_pb.GetServiceInfoResponse>;
  removeService: grpc.MethodDefinition<engine_service_pb.RemoveServiceArgs, google_protobuf_empty_pb.Empty>;
  repartition: grpc.MethodDefinition<engine_service_pb.RepartitionArgs, google_protobuf_empty_pb.Empty>;
  execCommand: grpc.MethodDefinition<engine_service_pb.ExecCommandArgs, engine_service_pb.ExecCommandResponse>;
  waitForHttpGetEndpointAvailability: grpc.MethodDefinition<engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs, google_protobuf_empty_pb.Empty>;
  waitForHttpPostEndpointAvailability: grpc.MethodDefinition<engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs, google_protobuf_empty_pb.Empty>;
  executeBulkCommands: grpc.MethodDefinition<engine_service_pb.ExecuteBulkCommandsArgs, google_protobuf_empty_pb.Empty>;
  getServices: grpc.MethodDefinition<engine_service_pb.GetServicesArgs, engine_service_pb.GetServicesResponse>;
  getModules: grpc.MethodDefinition<engine_service_pb.GetModulesArgs, engine_service_pb.GetModulesResponse>;
}

export const EngineServiceService: IEngineServiceService;

export interface IEngineServiceServer extends grpc.UntypedServiceImplementation {
  getEngineInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, engine_service_pb.GetEngineInfoResponse>;
  createEnclave: grpc.handleUnaryCall<engine_service_pb.CreateEnclaveArgs, engine_service_pb.CreateEnclaveResponse>;
  getEnclaves: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, engine_service_pb.GetEnclavesResponse>;
  stopEnclave: grpc.handleUnaryCall<engine_service_pb.StopEnclaveArgs, google_protobuf_empty_pb.Empty>;
  destroyEnclave: grpc.handleUnaryCall<engine_service_pb.DestroyEnclaveArgs, google_protobuf_empty_pb.Empty>;
  startExternalContainerRegistration: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, engine_service_pb.StartExternalContainerRegistrationResponse>;
  finishExternalContainerRegistration: grpc.handleUnaryCall<engine_service_pb.FinishExternalContainerRegistrationArgs, google_protobuf_empty_pb.Empty>;
  loadModule: grpc.handleUnaryCall<engine_service_pb.LoadModuleArgs, google_protobuf_empty_pb.Empty>;
  unloadModule: grpc.handleUnaryCall<engine_service_pb.UnloadModuleArgs, google_protobuf_empty_pb.Empty>;
  executeModule: grpc.handleUnaryCall<engine_service_pb.ExecuteModuleArgs, engine_service_pb.ExecuteModuleResponse>;
  getModuleInfo: grpc.handleUnaryCall<engine_service_pb.GetModuleInfoArgs, engine_service_pb.GetModuleInfoResponse>;
  registerFilesArtifacts: grpc.handleUnaryCall<engine_service_pb.RegisterFilesArtifactsArgs, google_protobuf_empty_pb.Empty>;
  registerService: grpc.handleUnaryCall<engine_service_pb.RegisterServiceArgs, engine_service_pb.RegisterServiceResponse>;
  startService: grpc.handleUnaryCall<engine_service_pb.StartServiceArgs, engine_service_pb.StartServiceResponse>;
  getServiceInfo: grpc.handleUnaryCall<engine_service_pb.GetServiceInfoArgs, engine_service_pb.GetServiceInfoResponse>;
  removeService: grpc.handleUnaryCall<engine_service_pb.RemoveServiceArgs, google_protobuf_empty_pb.Empty>;
  repartition: grpc.handleUnaryCall<engine_service_pb.RepartitionArgs, google_protobuf_empty_pb.Empty>;
  execCommand: grpc.handleUnaryCall<engine_service_pb.ExecCommandArgs, engine_service_pb.ExecCommandResponse>;
  waitForHttpGetEndpointAvailability: grpc.handleUnaryCall<engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs, google_protobuf_empty_pb.Empty>;
  waitForHttpPostEndpointAvailability: grpc.handleUnaryCall<engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs, google_protobuf_empty_pb.Empty>;
  executeBulkCommands: grpc.handleUnaryCall<engine_service_pb.ExecuteBulkCommandsArgs, google_protobuf_empty_pb.Empty>;
  getServices: grpc.handleUnaryCall<engine_service_pb.GetServicesArgs, engine_service_pb.GetServicesResponse>;
  getModules: grpc.handleUnaryCall<engine_service_pb.GetModulesArgs, engine_service_pb.GetModulesResponse>;
}

export class EngineServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getEngineInfo(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<engine_service_pb.GetEngineInfoResponse>): grpc.ClientUnaryCall;
  getEngineInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEngineInfoResponse>): grpc.ClientUnaryCall;
  getEngineInfo(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEngineInfoResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  createEnclave(argument: engine_service_pb.CreateEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.CreateEnclaveResponse>): grpc.ClientUnaryCall;
  getEnclaves(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<engine_service_pb.GetEnclavesResponse>): grpc.ClientUnaryCall;
  getEnclaves(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEnclavesResponse>): grpc.ClientUnaryCall;
  getEnclaves(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetEnclavesResponse>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  stopEnclave(argument: engine_service_pb.StopEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  destroyEnclave(argument: engine_service_pb.DestroyEnclaveArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  startExternalContainerRegistration(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<engine_service_pb.StartExternalContainerRegistrationResponse>): grpc.ClientUnaryCall;
  startExternalContainerRegistration(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.StartExternalContainerRegistrationResponse>): grpc.ClientUnaryCall;
  startExternalContainerRegistration(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.StartExternalContainerRegistrationResponse>): grpc.ClientUnaryCall;
  finishExternalContainerRegistration(argument: engine_service_pb.FinishExternalContainerRegistrationArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finishExternalContainerRegistration(argument: engine_service_pb.FinishExternalContainerRegistrationArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finishExternalContainerRegistration(argument: engine_service_pb.FinishExternalContainerRegistrationArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  loadModule(argument: engine_service_pb.LoadModuleArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  loadModule(argument: engine_service_pb.LoadModuleArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  loadModule(argument: engine_service_pb.LoadModuleArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  unloadModule(argument: engine_service_pb.UnloadModuleArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  unloadModule(argument: engine_service_pb.UnloadModuleArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  unloadModule(argument: engine_service_pb.UnloadModuleArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executeModule(argument: engine_service_pb.ExecuteModuleArgs, callback: grpc.requestCallback<engine_service_pb.ExecuteModuleResponse>): grpc.ClientUnaryCall;
  executeModule(argument: engine_service_pb.ExecuteModuleArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.ExecuteModuleResponse>): grpc.ClientUnaryCall;
  executeModule(argument: engine_service_pb.ExecuteModuleArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.ExecuteModuleResponse>): grpc.ClientUnaryCall;
  getModuleInfo(argument: engine_service_pb.GetModuleInfoArgs, callback: grpc.requestCallback<engine_service_pb.GetModuleInfoResponse>): grpc.ClientUnaryCall;
  getModuleInfo(argument: engine_service_pb.GetModuleInfoArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetModuleInfoResponse>): grpc.ClientUnaryCall;
  getModuleInfo(argument: engine_service_pb.GetModuleInfoArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetModuleInfoResponse>): grpc.ClientUnaryCall;
  registerFilesArtifacts(argument: engine_service_pb.RegisterFilesArtifactsArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerFilesArtifacts(argument: engine_service_pb.RegisterFilesArtifactsArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerFilesArtifacts(argument: engine_service_pb.RegisterFilesArtifactsArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerService(argument: engine_service_pb.RegisterServiceArgs, callback: grpc.requestCallback<engine_service_pb.RegisterServiceResponse>): grpc.ClientUnaryCall;
  registerService(argument: engine_service_pb.RegisterServiceArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.RegisterServiceResponse>): grpc.ClientUnaryCall;
  registerService(argument: engine_service_pb.RegisterServiceArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.RegisterServiceResponse>): grpc.ClientUnaryCall;
  startService(argument: engine_service_pb.StartServiceArgs, callback: grpc.requestCallback<engine_service_pb.StartServiceResponse>): grpc.ClientUnaryCall;
  startService(argument: engine_service_pb.StartServiceArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.StartServiceResponse>): grpc.ClientUnaryCall;
  startService(argument: engine_service_pb.StartServiceArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.StartServiceResponse>): grpc.ClientUnaryCall;
  getServiceInfo(argument: engine_service_pb.GetServiceInfoArgs, callback: grpc.requestCallback<engine_service_pb.GetServiceInfoResponse>): grpc.ClientUnaryCall;
  getServiceInfo(argument: engine_service_pb.GetServiceInfoArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetServiceInfoResponse>): grpc.ClientUnaryCall;
  getServiceInfo(argument: engine_service_pb.GetServiceInfoArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetServiceInfoResponse>): grpc.ClientUnaryCall;
  removeService(argument: engine_service_pb.RemoveServiceArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeService(argument: engine_service_pb.RemoveServiceArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeService(argument: engine_service_pb.RemoveServiceArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  repartition(argument: engine_service_pb.RepartitionArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  repartition(argument: engine_service_pb.RepartitionArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  repartition(argument: engine_service_pb.RepartitionArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  execCommand(argument: engine_service_pb.ExecCommandArgs, callback: grpc.requestCallback<engine_service_pb.ExecCommandResponse>): grpc.ClientUnaryCall;
  execCommand(argument: engine_service_pb.ExecCommandArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.ExecCommandResponse>): grpc.ClientUnaryCall;
  execCommand(argument: engine_service_pb.ExecCommandArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.ExecCommandResponse>): grpc.ClientUnaryCall;
  waitForHttpGetEndpointAvailability(argument: engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitForHttpGetEndpointAvailability(argument: engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitForHttpGetEndpointAvailability(argument: engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitForHttpPostEndpointAvailability(argument: engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitForHttpPostEndpointAvailability(argument: engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitForHttpPostEndpointAvailability(argument: engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executeBulkCommands(argument: engine_service_pb.ExecuteBulkCommandsArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executeBulkCommands(argument: engine_service_pb.ExecuteBulkCommandsArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executeBulkCommands(argument: engine_service_pb.ExecuteBulkCommandsArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getServices(argument: engine_service_pb.GetServicesArgs, callback: grpc.requestCallback<engine_service_pb.GetServicesResponse>): grpc.ClientUnaryCall;
  getServices(argument: engine_service_pb.GetServicesArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetServicesResponse>): grpc.ClientUnaryCall;
  getServices(argument: engine_service_pb.GetServicesArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetServicesResponse>): grpc.ClientUnaryCall;
  getModules(argument: engine_service_pb.GetModulesArgs, callback: grpc.requestCallback<engine_service_pb.GetModulesResponse>): grpc.ClientUnaryCall;
  getModules(argument: engine_service_pb.GetModulesArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetModulesResponse>): grpc.ClientUnaryCall;
  getModules(argument: engine_service_pb.GetModulesArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<engine_service_pb.GetModulesResponse>): grpc.ClientUnaryCall;
}
