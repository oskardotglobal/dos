import type {BoardProps} from "boardgame.io/react";
import {TypeOfG} from "$/lib/game";
import {useState} from "react";
import {GameState} from "$/lib/types";

export default function Board(props: BoardProps<TypeOfG>) {
    const [G] = useState((GameState.fromG(props.G)));

    return (
        <div>
            <h1>Board</h1>
        </div>
    );
}