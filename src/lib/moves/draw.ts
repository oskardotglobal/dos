import type {Move} from "boardgame.io";
import {GameState, type IGameState} from "$/lib/types";
import * as O from "fp-ts/Option";

export const Draw: Move<IGameState> = ({G: g, events, playerID}) => {
    const G = GameState.of(g);
    const card = G.draw();
    const player = G.getPlayer(playerID);

    if (O.isSome(card)) {
        player.hand.push(card.value);
    }

    G.to(g);
    events.endTurn();
};