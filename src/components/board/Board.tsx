import type {BoardProps} from "boardgame.io/react";
import {GameState, SerializableGameState} from "$/lib/types";
import React from "react";
import Background from "$/components/board/Background";
import {Enemy1Deck, Enemy2Deck, Enemy3Deck, MainDeck} from "$/components/board/Decks";

export default function Board(props: BoardProps<SerializableGameState>) {
    const G = GameState.deserialize(props.G);
    const mainDeck = new MainDeck(G, 0);
    const enemy1Deck = new Enemy1Deck(G, 1);
    const enemy2Deck = new Enemy2Deck(G, 1);
    const enemy3Deck = new Enemy3Deck(G, 1);
    return (<div>
        <Background/>
        {mainDeck.initializeDeck()}
        {enemy1Deck.initializeDeck()}
        {enemy2Deck.initializeDeck()}
        {enemy3Deck.initializeDeck()}
    </div>);

}