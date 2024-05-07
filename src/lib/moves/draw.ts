import type {Move} from "boardgame.io";
import {GameState} from "$/lib/types";
import * as O from "fp-ts/Option";
import {TypeOfG} from "$/lib/game";

export const Draw: Move<TypeOfG> = ({G: g, events, playerID}) => {
    const G = GameState.fromG(g);

    G.getPlayer(playerID).draw(G.deck);

    g.value = G.toG();
    events.endTurn();
};