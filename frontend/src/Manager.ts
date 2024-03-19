import {WsClient} from "tsrpc-browser";
import {ServiceType} from "./shared/protocols/serviceProto";
import {Listeners} from "./api/event/Listeners";
import {Event} from "./api/event/Event";
import {SetupListener} from "./systems/listener/SetupListener";
import {DrawListener} from "./systems/listener/DrawListener";
import {KeyPressedListener} from "./systems/listener/KeyPressedListener";
import {PreloadListener} from "./systems/listener/PreloadListener";
import {MousePressedListener} from "./systems/listener/MousePressedListener";
import {WindowResizedListener} from "./systems/listener/WindowResizedListener";
import {Deck} from "./shared/Deck";
import {Player} from "./shared/Player";


/**
 * Manager class.
 */
export class Manager {
    private readonly client: WsClient<ServiceType> | null;
    private readonly listeners: Listeners;
    private readonly deck: Deck;

    private readonly players: Map<string, Player>;

    public constructor() {
        /*
        this.client = new WsClient(serviceProto, {
            server: "ws://127.0.0.1:3000",
            json: true,
            logger: console,
        });
         */
        this.client = null;

        this.listeners = new Listeners();
        this.listeners.register(Event.SETUP, new SetupListener(this));
        this.listeners.register(Event.DRAW, new DrawListener(this));
        this.listeners.register(Event.KEY_PRESSED, new KeyPressedListener(this));
        this.listeners.register(Event.PRELOAD, new PreloadListener(this));
        this.listeners.register(Event.MOUSE_PRESSED, new MousePressedListener(this));
        this.listeners.register(Event.WINDOW_RESIZED, new WindowResizedListener(this));

        this.deck = new Deck();
        this.deck.shuffle();

        this.players = new Map<string, Player>();
    }

    public getClient(): WsClient<ServiceType> | null {
        return this.client;
    }
}