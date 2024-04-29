import type {Card, IGameState} from "$/lib/types";
import type * as O from "fp-ts/Option";
import {optionOf} from "$/lib/functions/index";

export function putCardAtBottom(G: IGameState, card: Card) {
    G.deck.cards = [card].concat(G.deck.cards);
}

export function drawCard(G: IGameState): O.Option<Card> {
    return optionOf(G.deck.cards.pop());
}