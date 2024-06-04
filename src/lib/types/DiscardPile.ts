import {Card, CardColor, CardType, Deck, Serializable} from "$/lib/types";
import * as O from "fp-ts/Option";

export class DiscardPile implements Serializable<DiscardPile> {
    private card: O.Option<Card>;
    private drawAmount: number;

    private constructor(card: O.Option<Card>, drawAmount: number) {
        this.card = card;
        this.drawAmount = drawAmount;
    }

    public canPlayOn(newCard: Card) {
        if (O.isNone(this.card)) return true;

        if (this.card.value.color === CardColor.COLORLESS) {
            return true;
        }

        if (newCard.type === this.card.value.type) {
            return true;
        }

        return newCard.color === this.card.value.color;
    }

    public put(deck: Deck, card: Card) {
        if (card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
            const card = this.card;
            if (O.isNone(card)) return;

            // Ternary operator
            this.drawAmount += card.value.type === CardType.WISH_PLUS_FOUR ? 4 : 2;
        }

        if (O.isSome(this.card)) {
            deck.putAtBottom(this.card.value);
        }

        this.card = O.some(card);
    }

    public peek() {
        return this.card;
    }

    public getDrawAmount() {
        const amount = this.drawAmount;
        this.drawAmount = 0;

        return amount;
    }

    public deserialize(value: string): DiscardPile {
        const object: SerializableDiscardPile = JSON.parse(value);
        return new DiscardPile(O.of(object.card), object.drawAmount);
    }

    public serialize(): string {
        if (O.isNone(this.card)) {
            throw "No card in discard pile during serialization";
        }

        const object = <SerializableDiscardPile>{
            drawAmount: this.drawAmount,
            card: this.card.value,
        };

        return JSON.stringify(object);
    }

    public static create(deck: Deck) {
        return new DiscardPile(deck.draw(), 0);
    }
}

interface SerializableDiscardPile {
    drawAmount: number,
    card: Card,
}
