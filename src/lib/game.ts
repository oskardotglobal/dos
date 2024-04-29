import type {Game} from "boardgame.io";
import {getCardAmount, drawCard, optionOf, SomeP, NoneP, err} from "$/lib/functions";
import {type Deck, type IGameState, Cards, type PlayerData} from "$/lib/types";
import {match} from "ts-pattern";
import {Draw, Play} from "$/lib/moves";


export const DosGame: Game<IGameState> = {
    turn: {minMoves: 1, maxMoves: 1},
    moves: {Draw, Play},

    setup({ctx, random}) {
        const deck = <Deck>{cards: []};

        for (const card of Object.values(Cards)) {
            for (let i = 0; i < getCardAmount(card); i++) {
                deck.cards.push(card);
            }
        }

        deck.cards = random.Shuffle(deck.cards);

        const G = <IGameState>{
            players: {},
            discardPile: {
                card: optionOf(deck.cards.pop()),
                drawAmount: 0
            },
            deck: deck
        };

        for (const playerId of ctx.playOrder) {
            const playerData = <PlayerData>{hand: []};

            for (let i = 0; i < 7; i++) {
                match(drawCard(G))
                    .with(SomeP(), (card) => playerData.hand.push(card.value))
                    .with(NoneP(), () => err("card is undefined - Deck is not full enough during setup, this shouldn't be reachable"))
                    .exhaustive();
            }

            G.players[playerId] = playerData;
        }

        return G;
    }
}