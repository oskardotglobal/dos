import type {Move} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/types";

export const Draw: Move<SerializableGameState> = ({G: g, events, playerID}) => {
    const G = GameState.deserialize(g);

    G.getPlayer(playerID).draw(G.deck);

    G.serialize(g);
    events.endTurn();
};