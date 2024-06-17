import type {Game} from "boardgame.io";
import {GameState, SerializableGameState} from "$/lib/api";
import {Draw, Play} from "$/lib/moves";

/**
 * The game object as described by boardgame.io. <br />
 * It defines the `GameState` G. Since boardgame.io cannot serialize classes as GameState, an intermediate representation called `SerializableGameState`
 * is used as the type of G as seen by boardgame.io. We call this intermediate representation `g` and convert to and from it
 * via `GameState::serialize` (to `g` from `G`) and `GameState::deserialize` (to `G` from `g`). <br />
 *
 * `G` and `g` are immutable when passed to the Client. They are only changed via Moves. (Actually, only `G` is changed *directly* by moves, `g` is changed exclusively by `GameState`)
 * Here we defined two moves, `Play` (to play a card from your hand) and `Draw` (to draw a card). <br />
 *
 * Additionally, the Game object is in charge to populate the initial value of `g`.
 * Here, we do this by calling `GameState::create` and then immediately calling `GameState::serialize` to write to `g`.
 *
 * @see GameState
 * @see Game
 * @see Draw
 * @See Play
 * @link https://boardgame.io/documentation/#/api/Game
 * @link https://boardgame.io/documentation/#/
 */
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
            // Here, we use a ternary statement to get the next player depending on whether the current turn order is reversed
            // Note that we simply use `g` here, we do not need `G` since we only read from unserialized attributes anyway
            next: ({ G: g, ctx }) => (ctx.playOrderPos + (g.turnOrderReversed ? -1 : 1)) % ctx.numPlayers,
        }
    },
    moves: {Draw, Play},

    /**
     * Populates the initial value of `g`.
     * @param ctx the context passed by boardgame.io
     * @param random an object containing methods for randomization as defined by boardgame.io
     */
    setup({ctx, random}) {
        const g = <SerializableGameState>{};
        GameState.create(ctx, random).serialize(g);

        return g;
    }
}