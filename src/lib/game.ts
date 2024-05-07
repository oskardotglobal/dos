import type {Game} from "boardgame.io";
import {GameState} from "$/lib/types";
import {Draw, Play} from "$/lib/moves";

export type TypeOfG = { value: Record<string, any> };

export const DosGame: Game<TypeOfG> = {
    turn: {minMoves: 1, maxMoves: 1},
    moves: {Draw, Play},

    setup({ctx, random}) {
        return new GameState(ctx, random).toG();
    }
}