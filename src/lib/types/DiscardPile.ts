import {Card, CardColor, CardType, Deck} from "$/lib/types";
import * as O from "fp-ts/Option";

export class DiscardPile {
    private card: O.Option<Card>;
    private drawAmount: number;
    
    public constructor(deck: Deck) {
        this.card = deck.draw();
        this.drawAmount = 0;
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
        let shouldDraw = false;

        if (card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
            const card = this.card;
            if (O.isNone(card)) return false;

            if (!(card.value.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])) {
                shouldDraw = true;
            }

            // Ternary operator
            this.drawAmount += card.value.type === CardType.WISH_PLUS_FOUR ? 4 : 2;
        }

        if (shouldDraw) {
            return true;
        }

        if (O.isSome(this.card)) {
            deck.putAtBottom(this.card.value);
        }

        this.card = O.some(card);
        return false;
    }

    public getDrawAmount() {
        const amount = this.drawAmount;
        this.drawAmount = 0;

        return amount;
    }
}
