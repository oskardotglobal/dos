import type {Move} from "boardgame.io";
import type {GameState} from "$/lib/types";
import {assert, getPlayer} from "$/lib/functions";
import * as O from "fp-ts/Option";

export const Play: Move<GameState> = ({G, events, playerID}, cardID: number) => {
    const player = getPlayer(G, playerID);

    assert(player.hand[cardID] !== undefined, `Card of player ${playerID} with id ${cardID} not found`);
    const pickedCard = player.hand[cardID]!;

    delete player.hand[cardID];
    G.discardPile.card = O.some(pickedCard);

    events.endTurn();
};