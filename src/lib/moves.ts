import {type Move} from "boardgame.io";
import {type GameState} from "$/lib/DosGame";
import {drawCard} from "$/lib/api/Deck";

export const Draw: Move<GameState> = ({ G, events, playerID }) => {
    const card = drawCard(G.deck);
    G.players[playerID].hand.push(card);
    events.endTurn();
};