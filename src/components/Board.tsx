"use client";

import {type GameState} from "$/lib/types";
import type {BoardProps} from "boardgame.io/react";

export default function Board(_props: BoardProps<GameState>) {
    return (
        <div>
            <h1>Board</h1>
        </div>
    );
}