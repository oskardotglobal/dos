import type {Card, GameState} from "$/lib/types";
import type * as O from "fp-ts/Option";
import {optionOf} from "$/lib/functions/index";

export function putCardAtBottom(G: GameState, card: Card) {
    G.deck.cards = [card].concat(G.deck.cards);
}

export function drawCard(G: GameState): O.Option<Card> {
    return optionOf(G.deck.cards.pop());
}