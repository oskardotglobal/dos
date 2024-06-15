import type {BoardProps} from "boardgame.io/react";
import {GameState, SerializableGameState} from "$/lib/types";
import React from "react";
import Background from "$/components/board/Background";
import Deck from "$/components/board/Deck";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = GameState.deserialize(props.G);

    return <main>
        <Background/>
        {props.ctx.playOrder.map((id, i) => <Deck player={G.getPlayer(id)} playerIndex={i} key={i} />)}
    </main>

}