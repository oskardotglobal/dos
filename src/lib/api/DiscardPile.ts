import {Card, CardColor, CardType, Deck, Serializable} from "$/lib/api";
import {assert} from "$/lib/util/assertions";

/**
 * The DiscardPile class represents a discard pile in a card game. <br />
 * It only ever holds a singular card and keeps track of the number of cards to draw when a player is unable to play another +2 or +4 card.
 * Once a card is put on top of the discard pile, the old card is put at the bottom of the deck.
 *
 * @implements {Serializable<DiscardPile, SerializableDiscardPile>}
 * @class
 */
export class DiscardPile implements Serializable<DiscardPile, SerializableDiscardPile> {
    private card: Card;
    /**
     * The number of cards to draw from the deck when a player is unable to play another +2 or +4.
     * @private
     */
    private drawAmount: number;

    private constructor(card: Card, drawAmount: number) {
        this.card = card;
        this.drawAmount = drawAmount;
    }

    /**
     * Determines if a card can be played on top of the current card in the discard pile.
     * @method
     */
    public canPlayOn(newCard: Card) {
        if (this.card.color === CardColor.COLORLESS || newCard.color === CardColor.COLORLESS) {
            return true;
        }

        if (newCard.type === this.card.type) {
            return true;
        }

        return newCard.color === this.card.color;
    }

    /**
     * Puts a card on top of the discard pile and updates the draw amount if necessary.
     * @method
     */
    public put(deck: Deck, card: Card) {
        if (card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
            const card = this.card;
            this.drawAmount += card.type === CardType.WISH_PLUS_FOUR ? 4 : 2;
        }

        deck.putAtBottom(this.card);
        this.card = card;
    }

    /**
     * Returns the current card on top of the discard pile.
     * @method
     */
    public peek() {
        return this.card;
    }

    /**
     * Returns the current draw amount and resets it to zero.
     * This is only ever called when we know that the player has to draw cards, which is why we can safely reset the draw amount.
     */
    public getDrawAmount() {
        const amount = this.drawAmount;
        this.drawAmount = 0;

        return amount;
    }

    /**
     * Deserializes a `SerializableDiscardPile` object into a `DiscardPile` object.
     */
    public deserialize(object: SerializableDiscardPile): DiscardPile {
        return new DiscardPile(object.card, object.drawAmount);
    }

    /**
     * Serializes the `DiscardPile` object into a `SerializableDiscardPile` object.
     */
    public serialize(): SerializableDiscardPile {
        if (this.card == null) {
            throw "No card in discard pile during serialization";
        }

        return <SerializableDiscardPile>{
            drawAmount: this.drawAmount,
            card: this.card,
        };
    }

    /**
     * Creates a new `DiscardPile` object with a card drawn from the provided deck.
     */
    public static create(deck: Deck) {
        const card = deck.draw();
        assert(card !== null, "No card left for discard pile during initialization")

        return new DiscardPile(card, 0);
    }
}

/**
 * The `SerializableDiscardPile` interface represents the serialized form of a `DiscardPile` object.
 */
export interface SerializableDiscardPile {
    drawAmount: number,
    card: Card,
}
