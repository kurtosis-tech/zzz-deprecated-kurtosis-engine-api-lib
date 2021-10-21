import { EngineServiceClient } from "../../kurtosis_engine_rpc_api_bindings/engine_service_grpc_pb";
import { LISTEN_PORT} from "../../kurtosis_engine_rpc_api_consts/kurtosis_engine_rpc_api_consts";
import {EnclaveContext} from "../enclave_context/enclave_context";
import * as grpc from "grpc";
import { Result, err, ok } from "neverthrow";
import {newCreateEnclaveArgs, newDestroyEnclaveArgs} from "../constructor_calls";
import {
    CreateEnclaveArgs,
    CreateEnclaveResponse, DestroyEnclaveArgs, EnclaveAPIContainerInfo, EnclaveAPIContainerStatusMap,
    EnclaveInfo, GetEnclavesResponse
} from "../../kurtosis_engine_rpc_api_bindings/engine_service_pb";
import {APIContainerContext} from "../api_container_context/api_container_context";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as jspb from "google-protobuf";

const LOCAL_HOST_IP_ADDRESS_STR: string = "0.0.0.0";

export class KurtosisContext {
    private readonly client: EngineServiceClient;

    private constructor(client: EngineServiceClient) {
        this.client = client;
    }

    public newKurtosisContextFromLocalEngine(): Result<KurtosisContext, Error>{
        let kurtosisEngineSocketStr: string = LOCAL_HOST_IP_ADDRESS_STR + LISTEN_PORT;

        let engineServiceClient: EngineServiceClient;
        // TODO SECURITY: Use HTTPS to ensure we're connecting to the real Kurtosis API servers
        try {
            engineServiceClient = new EngineServiceClient(kurtosisEngineSocketStr, grpc.credentials.createInsecure());
        } catch(exception) {
            if (exception instanceof Error) {
                return err(exception);
            }
            return err(new Error(
                "An unknown exception value was thrown during creation of the engine client that wasn't an error: " + exception
            ));
        }

        let kurtosisContext: KurtosisContext = new KurtosisContext(engineServiceClient);

        return ok(kurtosisContext);
    }

    public async createEnclave(
        enclaveId: string,
        apiContainerImage: string,
        apiContainerLogLevel: string,
        isPartitioningEnabled: boolean,
        shouldPublishPorts: boolean): Promise<Result<EnclaveContext, Error>> {

        let args: CreateEnclaveArgs = newCreateEnclaveArgs(
            enclaveId,
            apiContainerImage,
            apiContainerLogLevel,
            isPartitioningEnabled,
            shouldPublishPorts)

        let promiseCreateEnclave: Promise<Result<CreateEnclaveResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.createEnclave(args, (error: grpc.ServiceError | null, response?: CreateEnclaveResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        let resultCreateEnclave: Result<CreateEnclaveResponse, Error> = await promiseCreateEnclave;
        if (!resultCreateEnclave.isOk()) {
            return err(resultCreateEnclave.error)
        }

        let response: CreateEnclaveResponse = resultCreateEnclave.value;

        let enclaveInfo: EnclaveInfo | undefined = response.getEnclaveInfo();
        let enclaveContext: EnclaveContext

        if (enclaveInfo instanceof EnclaveInfo) {
            enclaveContext = this.newEnclaveContextFromEnclaveInfo(enclaveInfo);
        } else {
            return err(new Error("An error occurred creating enclave with ID " + enclaveId + " enclaveInfo is undefined; this is a bug on this library" ))
        }

        return ok(enclaveContext);
    }

    public async getEnclaves(): Promise<Result<Map<string, EnclaveContext>, Error>>{

        let emptyArg: google_protobuf_empty_pb.Empty = new google_protobuf_empty_pb.Empty()

        let promiseGetEnclaves: Promise<Result<GetEnclavesResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.getEnclaves(emptyArg, (error: grpc.ServiceError | null, response?: GetEnclavesResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        let resultGetEnclaves: Result<GetEnclavesResponse, Error> = await promiseGetEnclaves;
        if (!resultGetEnclaves.isOk()) {
            return err(resultGetEnclaves.error)
        }

        let response: GetEnclavesResponse = resultGetEnclaves.value;

        let enclavesMap: Map<string, EnclaveContext> = this.newEnclaveContextMapFromEnclaveInfoMap(response.getEnclaveInfoMap())

        return ok(enclavesMap)
    }

    public async destroyEnclave(enclaveId: string): Promise<Result<null, Error>> {
        const args: DestroyEnclaveArgs = newDestroyEnclaveArgs(enclaveId);

        const promiseDestroyEnclave: Promise<Result<null, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.destroyEnclave(args, (error: Error | null, _unusedResponse?: google_protobuf_empty_pb.Empty) => {
                if (error === null) {
                    resolve(ok(null));
                } else {
                    resolve(err(error));
                }
            })
        });
        const resultDestroyEnclave: Result<null, Error> = await promiseDestroyEnclave;
        if (!resultDestroyEnclave.isOk()) {
            return err(resultDestroyEnclave.error);
        }

        return ok(null);
    }

    // ====================================================================================================
    //                                       Private helper functions
    // ====================================================================================================
    private newEnclaveContextMapFromEnclaveInfoMap(enclaveInfoMap: jspb.Map<string, EnclaveInfo>): Map<string, EnclaveContext> {

        let enclaveContextMap: Map<string, EnclaveContext> = new Map<string, EnclaveContext>()

        enclaveInfoMap.forEach((value: EnclaveInfo, key: string) => {
            let enclaveContext: EnclaveContext = this.newEnclaveContextFromEnclaveInfo(value);
            enclaveContextMap.set(key,enclaveContext);
        });

        return enclaveContextMap;
    }

    private newEnclaveContextFromEnclaveInfo(enclaveInfo: EnclaveInfo): EnclaveContext {

        let apiContainerInfo: EnclaveAPIContainerInfo | undefined = enclaveInfo.getApiContainerInfo();
        let apiContainerContext: APIContainerContext | undefined = undefined;

        let nonExistentApiContainerStatus: number = 0;

        if (enclaveInfo.getApiContainerStatus() != nonExistentApiContainerStatus && apiContainerInfo !== undefined) {
            apiContainerContext = new APIContainerContext(
                apiContainerInfo.getContainerId(),
                apiContainerInfo.getIpInsideEnclave(),
                apiContainerInfo.getPortInsideEnclave(),
                apiContainerInfo.getIpOnHostMachine(),
                apiContainerInfo.getPortOnHostMachine()
            )
        }

        let enclaveContext: EnclaveContext = new EnclaveContext(
            enclaveInfo.getEnclaveId(),
            enclaveInfo.getNetworkId(),
            enclaveInfo.getNetworkCidr(),
            apiContainerContext,
        )

        return enclaveContext;
    }
}
