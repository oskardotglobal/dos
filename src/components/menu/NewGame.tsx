import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/board/Board";
import LoadingScreen from "$/components/menu/LoadingScreen";
import {SocketIO} from "boardgame.io/multiplayer";

const Component = Client({
    game: DosGame,
    board: Board,
    loading: LoadingScreen,
    multiplayer: SocketIO({ server: "localhost:8000" }),
    debug: true,
});

/**
 * A react component representing the game screen. Renders the boardgame.io client. <br />
 * The boardgame.io client then renders the `Board` and passes the game data as defined by `DosGame` to it.
 * @See DosGame
 * @See Board
 * @see Client
 * @link https://boardgame.io/documentation/#/api/Client
 * @link https://boardgame.io/documentation/#/
 * @component
 */
export default function NewGame() {
    return <Component playerID={"0"}/>
}