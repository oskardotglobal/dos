import React from "react";
import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/Board";
import LoadingScreen from "$/components/LoadingScreen";
import {Local} from "boardgame.io/multiplayer";

const App = Client({
    game: DosGame,
    numPlayers: 2,
    board: Board,
    loading: LoadingScreen,
    multiplayer: Local(),
    debug: true,
});


const NewGame = () => {
    return (
        <div>
            <h1>New Game</h1>
        </div>
    );
}

export default NewGame;