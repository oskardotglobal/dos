import {Card} from "./cards/Card";
import {Deck} from "./Deck";


/**
 * The discard pile. Contains the current card on top of the pile.
 */
export class DiscardPile {
    private card: Card | null;

    constructor() {
        this.card = null;
    }

    public put(card: Card) {
        if (this.card !== null) {
            Deck.INSTANCE.put(this.card);
        }

        this.card = card;
    }

    public peek() {
        return this.card;
    }

    /**
     * Get the instance of the discard pile
     * @constructor
     */
    public static get INSTANCE(): DiscardPile {
        // @ts-ignore I don't fucking care
        window["discard_pile"] = window["discard_pile"] || new DiscardPile();

        // @ts-ignore this is defined above
        return window["discard_pile"];
    }
}