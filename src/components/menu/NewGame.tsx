import {Client} from "boardgame.io/react";
import {DosGame} from "$/lib/game";
import Board from "$/components/board/Board";
import LoadingScreen from "$/components/menu/LoadingScreen";
import {SocketIO} from "boardgame.io/multiplayer";
import {useMatch} from "$/lib/match";

export const serverUrl = import.meta.env.SERVER_URL || "http://localhost:8000";

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
    const [matchID, playerID, playerCredentials] = useMatch();

    if (matchID === null || playerID === null || playerCredentials === null) {
        return <></>
    }

    const Component = Client({
        game: DosGame,
        board: Board,
        loading: LoadingScreen,
        multiplayer: SocketIO({server: serverUrl}),
        debug: true,
    });

    return <Component
        matchID={matchID}
        playerID={playerID}
        credentials={playerCredentials}
    />
}