// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var engine_service_pb = require('./engine_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_engine_api_CreateEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.CreateEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.CreateEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_CreateEnclaveArgs(buffer_arg) {
  return engine_service_pb.CreateEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_CreateEnclaveResponse(arg) {
  if (!(arg instanceof engine_service_pb.CreateEnclaveResponse)) {
    throw new Error('Expected argument of type engine_api.CreateEnclaveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_CreateEnclaveResponse(buffer_arg) {
  return engine_service_pb.CreateEnclaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_DestroyEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.DestroyEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.DestroyEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_DestroyEnclaveArgs(buffer_arg) {
  return engine_service_pb.DestroyEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.GetEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.GetEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetEnclaveArgs(buffer_arg) {
  return engine_service_pb.GetEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetEnclaveResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetEnclaveResponse)) {
    throw new Error('Expected argument of type engine_api.GetEnclaveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetEnclaveResponse(buffer_arg) {
  return engine_service_pb.GetEnclaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var EngineServiceService = exports.EngineServiceService = {
  // Creates a new Kurtosis Enclave
createEnclave: {
    path: '/engine_api.EngineService/CreateEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.CreateEnclaveArgs,
    responseType: engine_service_pb.CreateEnclaveResponse,
    requestSerialize: serialize_engine_api_CreateEnclaveArgs,
    requestDeserialize: deserialize_engine_api_CreateEnclaveArgs,
    responseSerialize: serialize_engine_api_CreateEnclaveResponse,
    responseDeserialize: deserialize_engine_api_CreateEnclaveResponse,
  },
  // Get a running Kurtosis Enclave
getEnclave: {
    path: '/engine_api.EngineService/GetEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.GetEnclaveArgs,
    responseType: engine_service_pb.GetEnclaveResponse,
    requestSerialize: serialize_engine_api_GetEnclaveArgs,
    requestDeserialize: deserialize_engine_api_GetEnclaveArgs,
    responseSerialize: serialize_engine_api_GetEnclaveResponse,
    responseDeserialize: deserialize_engine_api_GetEnclaveResponse,
  },
  // Destroy a running Kurtosis Enclave
destroyEnclave: {
    path: '/engine_api.EngineService/DestroyEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.DestroyEnclaveArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_DestroyEnclaveArgs,
    requestDeserialize: deserialize_engine_api_DestroyEnclaveArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.EngineServiceClient = grpc.makeGenericClientConstructor(EngineServiceService);
