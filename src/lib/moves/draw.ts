import type {Move} from "boardgame.io";
import type {GameState} from "$/lib/types";
import {drawCard} from "$/lib/functions/deck";

export const Draw: Move<GameState> = ({ G, events, playerID }) => {
    const card = drawCard(G.deck);
    // G.players[playerID].hand.push(card);
    events.endTurn();
};