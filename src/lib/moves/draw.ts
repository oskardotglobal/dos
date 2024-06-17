import type {Move} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/api";

/**
 * Draws a card from the deck and adds it to the current player's hand.
 * @move
 */
export const Draw: Move<SerializableGameState> = ({G: g, events, playerID}) => {
    const G = GameState.deserialize(g);

    G.getPlayer(playerID).draw(G.deck);

    G.serialize(g);
    events.endTurn();
};