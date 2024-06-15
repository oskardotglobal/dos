import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/board/Board";
import LoadingScreen from "$/components/menu/LoadingScreen";
import {Local} from "boardgame.io/multiplayer";

export default function NewGame() {
    const Component = Client({
        game: DosGame,
        numPlayers: 4,
        board: Board,
        loading: LoadingScreen,
        multiplayer: Local(),
        debug: true,
    })

    return <Component />;
}