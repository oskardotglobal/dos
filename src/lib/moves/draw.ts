import type {Move} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/api";

/**
 * Draws a card from the deck and adds it to the current player's hand.
 * @move
 */
export const Draw: Move<SerializableGameState> = (args) => {
    const { G: g, events, ctx } = args;

    const G = GameState.deserialize(g);
    const player = G.getPlayer(ctx.currentPlayer);

    if (G.checkForceDraw(g, ctx, events)) return;

    player.draw(G.deck);

    G.serialize(g);
    events.endTurn();
};