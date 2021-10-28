import { EngineServiceClient } from '../../kurtosis_engine_rpc_api_bindings/engine_service_grpc_pb'; 
import { ExecCommandArgs, ExecCommandResponse } from '../../kurtosis_engine_rpc_api_bindings/engine_service_pb';
import { ServiceID} from './service';
import { SharedPath } from './shared_path';
import { newExecCommandArgs} from "../constructor_calls";
import { ok, err, Result } from 'neverthrow';
import * as grpc from "grpc";

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
export class ServiceContext {
    
    private readonly client: EngineServiceClient;
    private readonly enclaveId: string;
    private readonly serviceId: ServiceID;
    private readonly ipAddress: string;
    private readonly sharedDirectory: SharedPath;

    constructor(
            client: EngineServiceClient,
            enclaveId: string,
            serviceId: ServiceID,
            ipAddress: string,
            sharedDirectory: SharedPath) {
        this.client = client;
        this.enclaveId = enclaveId;
        this.serviceId = serviceId;
        this.ipAddress = ipAddress;
        this.sharedDirectory = sharedDirectory;
    }

    // Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
    public getServiceID(): ServiceID { 
        return this.serviceId;
    }

    // Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
    public getIPAddress(): string {
        return this.ipAddress;
    }

    // Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
    public getSharedDirectory(): SharedPath {
        return  this.sharedDirectory
    }

    // Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
    public async execCommand(command: string[]): Promise<Result<[number, string], Error>> {
        const serviceId: ServiceID = this.serviceId;
        const args: ExecCommandArgs = newExecCommandArgs(this.enclaveId, serviceId, command);

        const promiseExecCommand: Promise<Result<ExecCommandResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.execCommand(args, (error: grpc.ServiceError | null, response?: ExecCommandResponse) => {
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
        const resultExecCommand: Result<ExecCommandResponse, Error> = await promiseExecCommand;
        if (!resultExecCommand.isOk()) {
            return err(resultExecCommand.error);
        }
        const resp: ExecCommandResponse = resultExecCommand.value;

        return ok([resp.getExitCode(), resp.getLogOutput()]);
    }
}
