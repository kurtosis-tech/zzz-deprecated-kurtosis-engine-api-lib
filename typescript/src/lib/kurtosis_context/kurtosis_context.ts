import { EngineServiceClient } from "../../kurtosis_engine_rpc_api_bindings/engine_service_grpc_pb";
import { LISTEN_PORT} from "../../kurtosis_engine_rpc_api_consts/kurtosis_engine_rpc_api_consts";
import {EnclaveContext} from "../enclave_context/enclave_context";
import * as grpc from "grpc";
import { Result, err, ok, Err } from "neverthrow";
import {newCreateEnclaveArgs, newDestroyEnclaveArgs, newStopEnclaveArgs} from "../constructor_calls";
import {
    CreateEnclaveArgs,
    CreateEnclaveResponse, DestroyEnclaveArgs, EnclaveAPIContainerHostMachineInfo, EnclaveAPIContainerInfo, EnclaveAPIContainerStatus, EnclaveAPIContainerStatusMap,
    EnclaveContainersStatus,
    EnclaveContainersStatusMap,
    EnclaveInfo, GetEnclavesResponse, StopEnclaveArgs
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
        const newEnclaveContextResult: Result<EnclaveContext, Error> = this.newEnclaveContextFromEnclaveInfo(enclaveInfo);
        if (newEnclaveContextResult.isErr()) {
            return err(new Error(`An error occurred creating an enclave context from a newly-created enclave; this should never happen`))
        }

        return ok(newEnclaveContextResult.value);
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

    public async stopEnclave(enclaveId: string): Promise<Result<null, Error>> {
        const args: StopEnclaveArgs = newStopEnclaveArgs(enclaveId)

        const stopEnclavePromise: Promise<Result<null, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.stopEnclave(args, (error: Error | null, _unusedResponse?: google_protobuf_empty_pb.Empty) => {
                if (error === null) {
                    resolve(ok(null));
                } else {
                    resolve(err(error));
                }
            })
        });
        const stopEnclaveResult: Result<null, Error> = await stopEnclavePromise;
        if (!stopEnclaveResult.isOk()) {
            return err(stopEnclaveResult.error);
        }

        return ok(null);
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

        for (const [key, value] of enclaveInfoMap.entries()) {
            const newEnclaveContextResult: Result<EnclaveContext, Error> = this.newEnclaveContextFromEnclaveInfo(value);
            if (newEnclaveContextResult.isErr()) {
                // TODO This is really nasty - we skip enclaves that we can't create, and the only reason we wouldn't be able to create
                //  enclaves is because of stopped containers. Basically, we should move the API container into the engine-server, and
                //  make it impossible for enclaves to be in an invalid state at all
                continue;
            }
            enclaveContextMap.set(key, newEnclaveContextResult.value);
        }

        return enclaveContextMap;
    }

    private newEnclaveContextFromEnclaveInfo(enclaveInfo: EnclaveInfo): Result<EnclaveContext, Error> {
        const enclaveContainersStatus = enclaveInfo.getContainersStatus()
        if (enclaveContainersStatus !== EnclaveContainersStatus.ENCLAVECONTAINERSSTATUS_RUNNING) {
            return err(new Error(`Enclave containers status was '${enclaveContainersStatus}', but we can't create an enclave context from a non-running enclave`))
        }

        const enclaveApiContainerStatus = enclaveInfo.getApiContainerStatus()
        if (enclaveApiContainerStatus !== EnclaveAPIContainerStatus.ENCLAVEAPICONTAINERSTATUS_RUNNING) {
            return err(new Error(`Enclave API container status was '${enclaveApiContainerStatus}', but we can't create an enclave context without a running API container`))
        }

        const apiContainerInfo: EnclaveAPIContainerInfo | undefined = enclaveInfo.getApiContainerInfo();
        if (apiContainerInfo === undefined) {
            return err(new Error(`API container was listed as running, but no API container info exists`))
        }
        const apiContainerHostMachineInfo: EnclaveAPIContainerHostMachineInfo | undefined = enclaveInfo.getApiContainerHostMachineInfo()
        if (apiContainerHostMachineInfo === undefined) {
            return err(new Error(`API container was listed as running, but no API container host machine info exists`))
        }

        const apiContainerContext: ApiContainerContext = new ApiContainerContext(
            apiContainerInfo.getContainerId(),
            apiContainerInfo.getIpInsideEnclave(),
            apiContainerInfo.getPortInsideEnclave(),
            apiContainerHostMachineInfo.getIpOnHostMachine(),
            apiContainerHostMachineInfo.getPortOnHostMachine()
        )

        const enclaveContext: EnclaveContext = new EnclaveContext(
            enclaveInfo.getEnclaveId(),
            enclaveInfo.getNetworkId(),
            enclaveInfo.getNetworkCidr(),
            apiContainerContext,
        )

        return ok(enclaveContext);
    }
}
