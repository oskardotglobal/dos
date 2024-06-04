import type {BoardProps} from "boardgame.io/react";
import {useEffect, useMemo} from "react";
import {GameState, SerializableGameState} from "$/lib/types";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = useMemo(() => GameState.deserialize(props.G), [props.G]);
    useEffect(() => G.serialize(props.G), [G]);

    return (
        <div>
            <h1>Board</h1>
        </div>
    );
}