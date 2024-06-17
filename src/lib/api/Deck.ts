import {Card, CardColor, Cards, Serializable} from "$/lib/api";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";

/**
 * The Deck class represents a deck of cards.
 * It implements the Serializable interface to allow for serialization and deserialization of the deck.
 * @implements {Serializable<Deck, SerializableDeck>}
 * @class
 */
export class Deck implements Serializable<Deck, SerializableDeck> {
    private readonly cards: Card[];

    private constructor(cards: Card[]) {
        this.cards = cards;
    }

    /**
     * Draws a card from the deck.
     * @returns {Card | null} - The drawn Card object or null if the deck is empty.
     * @method
     */
    public draw(): Card | null {
        return this.cards.pop() || null;
    }

    /**
     * Puts a card at the bottom of the deck.
     * @param {Card} card - The Card object to put at the bottom of the deck.
     * @method
     */
    public putAtBottom(card: Card) {
        this.cards.unshift(card);
    }

    /**
     * Deserializes a SerializableDeck object into a Deck instance.
     * @method
     */
    public deserialize(object: SerializableDeck): Deck {
        return new Deck(object.cards);
    }

    /**
     * Serializes the Deck instance into a SerializableDeck object.
     * @methodd
     */
    public serialize(): SerializableDeck {
        return <SerializableDeck>{
            cards: this.cards,
        };
    }

    /**
     * Factory method.
     * Creates a new Deck object with a shuffled array of Card objects.
     *
     * @see GameState.create
     * @static
     * @method
     */
    public static create(random: RandomAPI) {
        let cards: Card[] = [];

        for (const card of Object.values(Cards)) {
            for (let i = 0; i < (card.color === CardColor.COLORLESS ? 4 : 2); i++) {
                cards.push(card);
            }
        }

        cards = random.Shuffle(cards);
        return new Deck(cards);
    }

}

/**
 * The SerializableDeck interface represents the serialized form of a Deck object.
 * Note that card does not need to be serialized further since it is not a class.
 */
export interface SerializableDeck {
    cards: Card[];
}