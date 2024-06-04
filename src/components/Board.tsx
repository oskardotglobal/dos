import type {BoardProps} from "boardgame.io/react";
import {GameState, SerializableGameState} from "$/lib/types";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = GameState.deserialize(props.G);

    return (
        <div>
            <h1>Board</h1>
        </div>
    );
}