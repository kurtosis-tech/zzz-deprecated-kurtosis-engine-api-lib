# TBD
### Features
* Added a `StopEnclave` endpoint, for stopping the containers in an enclave

# 0.3.2
### Change
* Renamed `engine_server_consts` Golang and Typescript constants files to `kurtosis_engine_rpc_api_consts`

# 0.3.1
### Features
* Added `kurtosis_engine_server_rpc_api_consts` Typescript version

### Fixes
* Regenerated protobuf bindings file with latest RPC API messages

# 0.3.0
### Breaking changes
* Renamed `network_ip` field in `GetEnclaveResponse` protobuf message to `network_cidr` because the value will contain IP address and Mask
  * Users should use the new field `network_cidr` instead the old `network_ip` and parse it to get the network ip address and mask

# 0.2.0
### Features
* Added `kurtosis_engine_server_rpc_api_consts` which contains constants related to the Kurtosis Engine Server (e.g. ListenProtocol)
* Added `api_container_log_level` argument in `CreateEnclaveArgs` to specified the log level that the API container running in the enclave should have

### Breaking changes
* Renamed `network_ip` field in `CreateEnclaveResponse` protobuf message to `network_cidr` because the value will contain IP address and Mask
    * Users should use the new field `network_cidr` instead the old `network_ip` and parse it to get the network ip address and mask

# 0.1.1
### Features
* Added the `engine_service` proto file which is the RPC definition of the Kurtosis Engine service
* Added `regenerate-protobuf-bindings.sh` tp regenerate the Golang and Typescript bindings using the latest version of `generate-protobuf-bindings` from the devtools repo

### Change
* Updated `package.json` file adding name, description, dependencies, repository configuration, keywords and author's information

# 0.1.0
* Initial commit
