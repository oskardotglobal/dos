import {WsClient} from "tsrpc-browser";
import {serviceProto, ServiceType} from "../../backend/src/shared/protocols/serviceProto";
import {Listeners} from "./api/event/Listeners";
import {Event} from "./api/event/Event";
import {SetupListener} from "./systems/listener/SetupListener";

/**
 * Manager class.
 */
export class Manager {
    private readonly client: WsClient<ServiceType>;
    private readonly listeners: Listeners;

    constructor() {
        this.client = new WsClient(serviceProto, {
            server: "ws://127.0.0.1:3000",
            json: true,
            logger: console,
        });

        this.listeners = new Listeners();
        this.listeners.register(Event.SETUP, new SetupListener(this));
    }

    public getClient(): WsClient<ServiceType> {
        return this.client;
    }
}

