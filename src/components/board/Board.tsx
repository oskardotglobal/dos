import type {BoardProps} from "boardgame.io/react";
import {GameState, SerializableGameState} from "$/lib/api";
import React, {useMemo} from "react";
import Background from "$/components/board/Background";
import Hand from "$/components/board/Hand";
import DiscardPile from "$/components/board/DiscardPile";
import Deck from "$/components/board/Deck";
import {assert} from "$/lib/util/assertions";
import Enemy from "$/components/board/Enemy";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = useMemo(() => GameState.deserialize(props.G), [props.G]);

    assert(props.playerID !== null, "PlayerID should never be null");

    const otherPlayers = useMemo(() => {
        // this assertion has to run twice due to changed scope
        assert(props.playerID !== null, "PlayerID should never be null");

        const allPlayers = props.ctx.playOrder;
        allPlayers.splice(allPlayers.indexOf(props.playerID))

        return allPlayers;
    }, [props.playerID, props.ctx.playOrder]);

    return <main>
        <Background/>

        <DiscardPile discardPile={G.discardPile}/>
        <Deck moves={props.moves}/>

        <Hand
            player={G.getPlayer(props.playerID)}
            moves={props.moves}
        />

        {
            otherPlayers.map(
                (id, i) => <Enemy
                    player={G.getPlayer(id)}
                    playerIndex={i}
                    key={i}
                />
            )
        }
    </main>
}