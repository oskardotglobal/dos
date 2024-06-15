import type {Game} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/types";
import {Draw, Play} from "$/lib/moves";
import {TurnOrder} from "boardgame.io/core";

export const DosGame: Game<SerializableGameState> = {
    turn: {
        minMoves: 1,
        maxMoves: 1,
        order: {
            // Get the initial value of playOrderPos.
            // This is called at the beginning of the phase.
            first: (_) => 0,

            // Get the next value of playOrderPos.
            // This is called at the end of each turn.
            // The phase ends if this returns undefined.
            next: ({ G: g, ctx }) => (ctx.playOrderPos + (g.turnOrderReversed ? -1 : 1)) % ctx.numPlayers,
        }
    },
    moves: {Draw, Play},

    setup({ctx, random}) {
        const g = <SerializableGameState>{};
        GameState.create(ctx, random).serialize(g);

        return g;
    }
}