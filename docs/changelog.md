# TBD
### Features
* Added `GetEngineInfoResponse.engine_version` field in `engine_service.proto` file to get the engine server version from the API

# 0.7.1
### Fixes
* Remove unneeded Kurt Core dependency

# 0.7.0
### Features
* Added `KurtosisContext.StopEnclave`
* All Go `KurtosisContext` methods now accept a `Context`

### Fixes
* Fixed panic that would happen when getting enclave info
* Exports `KurtosisContext`, `EnclaveContext`, and `ApiContainerContext` from the Typescript library

### Breaking Changes
* All `KurtosisContext` methods in the Go library accept a `Context`
    * Users should pass in whichever context is appropriate

# 0.6.0
### Features
* Added `APIContainerContext` object to store API container data like ip address and host's ip address
* Added `EnclaveContext` object to store Kurtosis Enclave information like network ID and the API container context
* Added `KurtosisContext` which is a high level API created for simplify `Kurtosis Engine Server` users interaction
* Added `KurtosisContext.CreateEnclave` method in Golang and Typescript libraries to create new Kurtosis Enclaves
* Added `KurtosisContext.GetEnclaves` method in Golang and Typescript libraries to get a Map of running Kurtosis Enclaves
* Added `KurtosisContext.DestroyEnclave` method in Golang and Typescript libraries to destroy a Kurtosis Enclave

### Breaking Changes
* Updated `CreateEnclaveResponse` in order to reuse the `EnclaveInfo` object that is used in `GetEnclavesResponse`

# 0.5.0
### Features
* Added the `GetEnclaves` call, which returns more detailed information about an enclave

### Breaking Changes
* Removed the `GetEnclave` function and replaced it with `GetEnclaves`

# 0.4.2
### Features
* Added own version constants, so client code can tell what version of this library it's using

### Fixes
* Fixed the Typescript library not actually exporting anything

# 0.4.1
### Features
* Added a `GetEngineInfo` endpoint, for a) getting engine API version and b) checking that the engine is available

# 0.4.0
### Fixes
* Changed the Go `ListenPort` constant to be a `uint16`, rather than an `int`, because ports can be neither negative nor greater than 2 ^ 16
* Made the package name containing the RPC API consts match the same format as the `_bindings` package

### Breaking Changes
* The Go `ListenPort` constant is now a `uint16`, rather than an `int`
* Changed the package `kurtosis_engine_server_rpc_api_consts` -> `kurtosis_engine_rpc_api_consts`
    * Users should use the new package name

# 0.3.3
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
