import {type Card, CardType, type GameState} from "$/lib/types";
import {putCardAtBottom} from "$/lib/functions";
import * as O from "fp-ts/Option";

export function putIntoDiscardPile(G: GameState, card: Card) {
    let shouldDraw = false;

    if (card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
        const card = G.discardPile.card;
        if (O.isNone(card)) return false;

        if (!(card.value.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])) {
            shouldDraw = true;
            G.discardPile.drawAmount = 0;
        }

        // Ternary operator
        G.discardPile.drawAmount += card.value.type === CardType.WISH_PLUS_FOUR ? 4 : 2;
    }

    if (shouldDraw) {
        return true;
    }

    if (O.isSome(G.discardPile.card)) {
        putCardAtBottom(G, G.discardPile.card.value);
    }

    G.discardPile.card = O.some(card);
    return false;
}