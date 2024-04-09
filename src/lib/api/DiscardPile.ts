import type Card from "$/lib/api/cards/Card";
import type Deck from "$/lib/api/Deck";
import {putCardAtBottom} from "$/lib/api/Deck";
import CardType from "$/lib/api/cards/CardType";

export interface DiscardPile {
    card: Card;
    drawAmount: number;
}

export function putIntoDiscardPile(discardPile: DiscardPile, deck: Deck, card: Card) {
    let shouldDraw = false;

    if (card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
        if (!(discardPile.card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])) {
            shouldDraw = true;
            discardPile.drawAmount = 0;
        }

        // Ternary operator
        discardPile.drawAmount += card.type === CardType.WISH_PLUS_FOUR ? 4 : 2;
    }

    if (shouldDraw) {
        return true;
    }

    if (discardPile.card !== null) {
        putCardAtBottom(deck, discardPile.card);
    }

    discardPile.card = card;
    return false;
}