import type {BoardProps} from "boardgame.io/react";
import {GameState, SerializableGameState} from "$/lib/api";
import React, {useMemo} from "react";
import Background from "$/components/board/Background";
import Hand from "$/components/board/Hand";
import DiscardPile from "$/components/board/DiscardPile";
import Deck from "$/components/board/Deck";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = useMemo(() => GameState.deserialize(props.G), [props.G]);

    return <main>
        <Background/>

        <DiscardPile discardPile={G.discardPile}/>
        <Deck moves={props.moves}/>

        {
            props.ctx.playOrder.map(
                (id, i) => <Hand
                    player={G.getPlayer(id)}
                    moves={props.moves}
                    playerIndex={i}
                    key={i}
                />
            )
        }
    </main>
}