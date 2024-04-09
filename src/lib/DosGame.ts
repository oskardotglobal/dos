import type {Game, PlayerID} from "boardgame.io";
import type PlayerData from "$/lib/api/PlayerData";
import {create} from "$/lib/utils";
import {type DiscardPile} from "$/lib/api/DiscardPile";
import Deck, {drawCard} from "$/lib/api/Deck";
import Cards from "$/lib/api/cards/Cards";
import type Card from "$/lib/api/cards/Card";
import {getCardAmountInDeck} from "$/lib/api/cards/Card";
import {isNone, match} from "fp-ts/Option";

export interface GameState {
    players: Record<PlayerID, PlayerData>;
    discardPile: DiscardPile;
    deck: Deck;
}

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

        const firstCard = drawCard(deck);

        if (isNone(firstCard)) {
            throw "firstCard is undefined - Deck is empty during setup, this shouldn't be reachable";
        }

        const G: GameState = create({
            players: {},
            discardPile: create({
                card: firstCard.value,
                drawAmount: 0
            }),
            deck: deck,
        });

        for (const playerId of ctx.playOrder) {
            const hand: Card[] = [];

            for (let i = 0; i < 7; i++) {
                const card = drawCard(G.deck);

                if (isNone(card)) {
                    throw "card is undefined - Deck is not full enough during setup, this shouldn't be reachable";
                }

                hand.push(card.value);
            }

            G.players[playerId] = create({hand: hand});
        }

        return G;
    }
}