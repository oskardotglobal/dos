import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/board/Board";
import LoadingScreen from "$/components/menu/LoadingScreen";
import {Local} from "boardgame.io/multiplayer";

export default function NewGame() {
    return Client({
        game: DosGame,
        numPlayers: 2,
        board: Board,
        loading: LoadingScreen,
        multiplayer: Local(),
        debug: true,
    });
}