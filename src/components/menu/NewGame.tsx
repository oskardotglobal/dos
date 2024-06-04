import React from "react";
import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/board/Board";
import LoadingScreen from "$/components/menu/LoadingScreen";
import {Local} from "boardgame.io/multiplayer";

const App = Client({
    game: DosGame,
    numPlayers: 2,
    board: Board,
    loading: LoadingScreen,
    multiplayer: Local(),
    debug: true,
});


const NewGame = () => <App />;

export default NewGame;