import type {Move} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/api";

/**
 * Draws a card from the deck and adds it to the current player's hand.
 * @move
 */
export const Draw: Move<SerializableGameState> = ({G: g, events, ctx }) => {
    const G = GameState.deserialize(g);

    G.getPlayer(ctx.currentPlayer).draw(G.deck);

    G.serialize(g);
    events.endTurn();
};