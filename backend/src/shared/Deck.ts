import {Cards} from "./cards/Cards";
import {Card} from "./cards/Card";
import {getRandomNumber, removeIndexFromArray} from "./utils";

/**
 * The deck. Contains all cards in random order.
 * Use `Deck.INSTANCE` to access the current instance
 * @singleton
 */
export class Deck {
    private static instance: Deck;
    private cards: Card[] = [];

    private constructor() {
        for (const card of Object.values(Cards)) {
            for (let i = 0; i < card.getAmount(); i++) {
                this.cards.push(card);
            }
        }

        this.shuffle();
    }

    public shuffle() {
        const result: Card[] = [];

        for (let i = 0; i < this.cards.length; i++) {
            const j = getRandomNumber(0, this.cards.length);

            result[i] = this.cards[j];
            this.cards = removeIndexFromArray(this.cards, j);
        }

        this.cards = result;
    }

    public draw() {
        const card = this.cards.pop();

        if (card !== undefined) {
            return card;
        }

        return null;
    }

    /**
     * Add a card to the bottom of the deck
    */
    public put(card: Card) {
        this.cards = [card].concat(this.cards);
    }

    /**
     * Get the instance of the deck
     * @constructor
     */
    public static get INSTANCE(): Deck {
        if (!Deck.instance) {
            Deck.instance = new Deck();
        }

        return Deck.instance;
    }
}