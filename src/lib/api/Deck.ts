import type Card from "$/lib/api/cards/Card";
import {type Option, none, some} from "fp-ts/Option";

export default interface Deck {
    cards: Card[];
}

export function putCardAtBottom(deck: Deck, card: Card) {
    deck.cards = [card].concat(deck.cards);
}

export function drawCard(deck: Deck): Option<Card> {
    const card = deck.cards.pop();

    if (card === undefined) {
        return none;
    }

    return some(card);
}