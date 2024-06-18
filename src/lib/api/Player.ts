import {Card, Deck, Serializable} from "$/lib/api";
import {assert} from "$/lib/util/assertions";

/**
 * The Player class represents a player in the game.
 * It implements the Serializable interface to allow for serialization and deserialization of the player.
 * @implements {Serializable<Player, SerializablePlayer>}
 * @class
 */
export class Player implements Serializable<Player, SerializablePlayer> {
    private readonly hand: Card[];

    private constructor(hand: Card[]) {
        this.hand = hand;
    }

    /**
     * Returns the player's hand.
     * @method
     */
    public getHand() {
        return this.hand;
    }

    /**
     * Draws a card from the deck and adds it to the player's hand.
     * Does nothing if the deck is empty.
     * @method
     */
    public draw(deck: Deck) {
        const card = deck.draw();

        if (card !== null) {
            this.hand.push(card);
        }
    }

    /**
     * Deserializes a `SerializablePlayer` object into a `Player` instance.
     * @method
     */
    public deserialize(object: SerializablePlayer): Player {
        return new Player(object.hand);
    }

    /**
     * Serializes the `Player` instance into a `SerializablePlayer` object.
     * @method
     */
    public serialize(): SerializablePlayer {
        return <SerializablePlayer>{
            hand: this.hand,
        };
    }

    /**
     * Creates a new Player object with a hand drawn from the provided deck.
     * @method
     */
    public static create(deck: Deck) {
        const hand = [];

        for (let i = 0; i < 7; i++) {
            const card = deck.draw();

            assert(card !== null, "Nicht genug Karten im Deck während der Initialisierung")
            hand.push(card);
        }

        return new Player(hand);
    }
}

/**
 * The SerializablePlayer interface represents the serialized form of a `Player` instance.
 */
export interface SerializablePlayer {
    hand: Card[]
}
