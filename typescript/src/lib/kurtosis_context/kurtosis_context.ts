import { EngineServiceClient } from "../../kurtosis_engine_rpc_api_bindings/engine_service_grpc_pb";
import { LISTEN_PORT} from "../../kurtosis_engine_rpc_api_consts/kurtosis_engine_rpc_api_consts";
import * as grpc from "grpc";
import { Result, err, ok } from "neverthrow";

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

}