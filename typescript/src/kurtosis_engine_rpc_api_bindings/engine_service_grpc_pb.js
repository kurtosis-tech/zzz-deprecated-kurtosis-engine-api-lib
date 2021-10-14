// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var engine_service_pb = require('./engine_service_pb.js');

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
};

exports.EngineServiceClient = grpc.makeGenericClientConstructor(EngineServiceService);
