import Cards from "$/lib/api/cards/Cards";
import type CardType from "$/lib/api/cards/CardType";
import CardColor from "$/lib/api/cards/CardColor";
import {match} from "ts-pattern";

export default interface Card {
    type: CardType;
    id: number;
    color: CardColor;
}

export function getCardAmountInDeck(card: Card): number {
    return match(card.color)
        .with(CardColor.COLORLESS, () => 4)
        .otherwise(() => 2);
}

function canPlayOn(currentCard: Card, newCard: Card): boolean {
    if (currentCard.color === CardColor.COLORLESS) {
        return true;
    }

    if (newCard.type === currentCard.type) {
        return true;
    }

    return newCard.color === currentCard.color;
}

function cardOfId(id: number): Card | null {
    for (const card of Object.values(Cards)) {

        if (card.id === id) {
            return card;
        }
    }

    return null;
}