import type {Game} from "boardgame.io";
import {getCardAmountInDeck, drawCard, optionOf} from "$/lib/functions";
import {type Deck, type Card, type GameState, Cards, create} from "$/lib/types";
import * as O from "fp-ts/Option";


export const DosGame: Game<GameState> = {
    turn: {minMoves: 1, maxMoves: 1},
    moves: {},

    setup({ctx, random}) {
        const deck: Deck = create({cards: []});

        for (const card of Object.values(Cards)) {
            for (let i = 0; i < getCardAmountInDeck(card); i++) {
                deck.cards.push(card);
            }
        }

        deck.cards = random.Shuffle(deck.cards);

        const G: GameState = create({
            players: {},
            discardPile: create({
                card: optionOf(deck.cards.pop()),
                drawAmount: 0
            }),
            deck: deck,
        });

        for (const playerId of ctx.playOrder) {
            const hand: Card[] = [];

            for (let i = 0; i < 7; i++) {
                const card = drawCard(G);

                if (O.isNone(card)) {
                    throw "card is undefined - Deck is not full enough during setup, this shouldn't be reachable";
                }

                hand.push(card.value);
            }

            G.players[playerId] = create({hand: hand});
        }

        return G;
    }
}