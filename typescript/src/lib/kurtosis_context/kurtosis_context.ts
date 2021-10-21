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
import {ApiContainerContext} from "../api_container_context/api_container_context";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as jspb from "google-protobuf";

const LOCAL_HOST_IP_ADDRESS_STR: string = "0.0.0.0";

export class KurtosisContext {
    private readonly client: EngineServiceClient;

    private constructor(client: EngineServiceClient) {
        this.client = client;
    }

    // Attempts to create a KurtosisContext connected to a Kurtosis engine running locally
    public static newKurtosisContextFromLocalEngine(): Result<KurtosisContext, Error>{
        const kurtosisEngineSocketStr: string = `${LOCAL_HOST_IP_ADDRESS_STR}:${LISTEN_PORT}`;

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

        const kurtosisContext: KurtosisContext = new KurtosisContext(engineServiceClient);

        return ok(kurtosisContext);
    }

    public async createEnclave(
        enclaveId: string,
        apiContainerImage: string,
        apiContainerLogLevel: string,
        isPartitioningEnabled: boolean,
        shouldPublishPorts: boolean): Promise<Result<EnclaveContext, Error>> {

        const args: CreateEnclaveArgs = newCreateEnclaveArgs(
            enclaveId,
            apiContainerImage,
            apiContainerLogLevel,
            isPartitioningEnabled,
            shouldPublishPorts)

        const createEnclavePromise: Promise<Result<CreateEnclaveResponse, Error>> = new Promise((resolve, _unusedReject) => {
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

        const createEnclaveResult: Result<CreateEnclaveResponse, Error> = await createEnclavePromise;
        if (!createEnclaveResult.isOk()) {
            return err(createEnclaveResult.error)
        }

        const response: CreateEnclaveResponse = createEnclaveResult.value;

        const enclaveInfo: EnclaveInfo | undefined = response.getEnclaveInfo();
        if (enclaveInfo === undefined) {
            return err(new Error("An error occurred creating enclave with ID " + enclaveId + " enclaveInfo is undefined; this is a bug on this library" ))
        }
        const enclaveContext = this.newEnclaveContextFromEnclaveInfo(enclaveInfo);

        return ok(enclaveContext);
    }

    public async getEnclaves(): Promise<Result<Map<string, EnclaveContext>, Error>>{

        const emptyArg: google_protobuf_empty_pb.Empty = new google_protobuf_empty_pb.Empty()

        const getEnclavesPromise: Promise<Result<GetEnclavesResponse, Error>> = new Promise((resolve, _unusedReject) => {
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

        const getEnclavesResult: Result<GetEnclavesResponse, Error> = await getEnclavesPromise;
        if (!getEnclavesResult.isOk()) {
            return err(getEnclavesResult.error)
        }

        const response: GetEnclavesResponse = getEnclavesResult.value;

        const enclavesMap: Map<string, EnclaveContext> = this.newEnclaveContextMapFromEnclaveInfoMap(response.getEnclaveInfoMap())

        return ok(enclavesMap)
    }

    public async destroyEnclave(enclaveId: string): Promise<Result<null, Error>> {
        const args: DestroyEnclaveArgs = newDestroyEnclaveArgs(enclaveId);

        const destroyEnclavePromise: Promise<Result<null, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.destroyEnclave(args, (error: Error | null, _unusedResponse?: google_protobuf_empty_pb.Empty) => {
                if (error === null) {
                    resolve(ok(null));
                } else {
                    resolve(err(error));
                }
            })
        });
        const destroyEnclaveResult: Result<null, Error> = await destroyEnclavePromise;
        if (!destroyEnclaveResult.isOk()) {
            return err(destroyEnclaveResult.error);
        }

        return ok(null);
    }

    // ====================================================================================================
    //                                       Private helper functions
    // ====================================================================================================
    private newEnclaveContextMapFromEnclaveInfoMap(enclaveInfoMap: jspb.Map<string, EnclaveInfo>): Map<string, EnclaveContext> {

        const enclaveContextMap: Map<string, EnclaveContext> = new Map<string, EnclaveContext>()

        enclaveInfoMap.forEach((value: EnclaveInfo, key: string) => {
            const enclaveContext: EnclaveContext = this.newEnclaveContextFromEnclaveInfo(value);
            enclaveContextMap.set(key,enclaveContext);
        });

        return enclaveContextMap;
    }

    private newEnclaveContextFromEnclaveInfo(enclaveInfo: EnclaveInfo): EnclaveContext {

        const apiContainerInfo: EnclaveAPIContainerInfo | undefined = enclaveInfo.getApiContainerInfo();
        let apiContainerContext: ApiContainerContext | undefined = undefined;

        let nonExistentApiContainerStatus: number = 0;

        if (apiContainerInfo !== undefined) {
            apiContainerContext = new ApiContainerContext(
                apiContainerInfo.getContainerId(),
                apiContainerInfo.getIpInsideEnclave(),
                apiContainerInfo.getPortInsideEnclave(),
                apiContainerInfo.getIpOnHostMachine(),
                apiContainerInfo.getPortOnHostMachine()
            )
        }

        const enclaveContext: EnclaveContext = new EnclaveContext(
            enclaveInfo.getEnclaveId(),
            enclaveInfo.getNetworkId(),
            enclaveInfo.getNetworkCidr(),
            apiContainerContext,
        )

        return enclaveContext;
    }
}
