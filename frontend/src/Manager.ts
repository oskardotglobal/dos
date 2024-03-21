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
import {Player} from "./shared/Player";
import {DiscardPile} from "./shared/DiscardPile";
import {Card} from "./shared/cards/Card";
import {CardType} from "./shared/cards/CardType";
import {getRandomNumber} from "./shared/utils";

/**
 * Manager class.
 */
export class Manager {
    private readonly client: WsClient<ServiceType> | null;
    private readonly listeners: Listeners;

    private readonly players: Player[];
    private currentPlayer: number;

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

        // TODO: Create players
        this.players = [
            new Player("Player 1"),
            new Player("Player 2"),
            new Player("Player 3"),
            new Player("Player 4"),
        ];

        this.currentPlayer = getRandomNumber(0, this.players.length);
    }

    public hasGameEnded(): boolean {
        for (const player of this.getPlayers()) {
            if (player.getCardAmount() === 0) {
                return true;
            }
        }

        return false;
    }

    public play() {
        for (const player of this.getPlayers()) {
            for (let i = 0; i < 7; i++) {
                player.draw();
            }
        }

        // Game loop
        do {
            const topCard = DiscardPile.INSTANCE.peek();
            if (topCard.getType() === CardType.SKIP) continue;

            // TODO: other special cards

            const currentPlayer = this.players[this.currentPlayer];
            if (currentPlayer === undefined) throw "Current player is undefined.";

            const playableCards: Card[] = [];

            for (const card of currentPlayer.getHand()) {
                if (card.canPlayOn(topCard)) {
                    playableCards.push(card);
                }
            }

            if (playableCards.length === 0) {
                currentPlayer.draw();
                continue;
            }

            // TODO: Let the player select a card
            let playedCard = currentPlayer.getHand().indexOf(playableCards[0]);
            currentPlayer.play(playedCard);

            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        } while (!this.hasGameEnded());
    }

    public getClient(): WsClient<ServiceType> | null {
        return this.client;
    }

    public getListeners(): Listeners {
        return this.listeners;
    }

    public getPlayers() {
        return Object.values(this.players);
    }
}