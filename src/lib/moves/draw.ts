import type {Move} from "boardgame.io";
import type {GameState} from "$/lib/types";
import {drawCard, getPlayer} from "$/lib/functions";
import * as O from "fp-ts/Option";

export const Draw: Move<GameState> = ({G, events, playerID}) => {
    const card = drawCard(G);
    const player = getPlayer(G, playerID);

    if (O.isSome(card)) {
        player.hand.push(card.value);
    }

    events.endTurn();
};