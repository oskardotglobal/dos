import type {Move} from "boardgame.io";
import {GameState, IGameState} from "$/lib/types";
import {assert} from "$/lib/functions";
import * as O from "fp-ts/Option";

export const Play: Move<IGameState> = ({G: g, events, playerID}, cardID: number) => {
    const G = GameState.of(g);
    const player = G.getPlayer(playerID);

    assert(player.hand[cardID] !== undefined, `Card of player ${playerID} with id ${cardID} not found`);
    const pickedCard = player.hand[cardID]!;

    delete player.hand[cardID];
    G.discardPile.card = O.some(pickedCard);

    G.to(g);
    events.endTurn();
};