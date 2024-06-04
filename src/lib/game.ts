import type {Game} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/types";
import {Draw, Play} from "$/lib/moves";

export const DosGame: Game<SerializableGameState> = {
    turn: {minMoves: 1, maxMoves: 1},
    moves: {Draw, Play},

    setup({ctx, random}) {
        const g = <SerializableGameState>{};
        GameState.create(ctx, random).serialize(g);

        return g;
    }
}