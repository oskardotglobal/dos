import {type Card, CardColor, Cards} from "$/lib/types";
import {match} from "ts-pattern";
import * as O from "fp-ts/Option";

export function getCardAmount(card: Card): number {
    return match(card.color)
        .with(CardColor.COLORLESS, () => 4)
        .otherwise(() => 2);
}

export function canPlayOn(currentCard: Card, newCard: Card): boolean {
    if (currentCard.color === CardColor.COLORLESS) {
        return true;
    }

    if (newCard.type === currentCard.type) {
        return true;
    }

    return newCard.color === currentCard.color;
}

export function cardOfId(id: number): O.Option<Card> {
    for (const card of Object.values(Cards)) {

        if (card.id === id) {
            return O.some(card);
        }
    }

    return O.none;
}