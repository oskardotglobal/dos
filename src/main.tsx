import React from "react";
import ReactDOM from "react-dom";
import {Client} from "boardgame.io/react";
import {Local} from "boardgame.io/multiplayer";

import {DosGame} from "$/lib/game";
import Board from "$/components/Board";
import LoadingScreen from "$/components/LoadingScreen";

import "$/styles/globals.css";

const App = Client({
    // A game object.
    game: DosGame,

    // The number of players.
    numPlayers: 2,

    // Your React component representing the game board.
    // The props that this component receives are listed below.
    // When using TypeScript, type the component's properties as
    // extending BoardProps.
    board: Board,

    // Optional: React component to display while the client
    // is in the "loading" api prior to the initial sync
    // with the game master. Relevant only in multiplayer mode.
    // If this is not provided, the client displays "connecting...".
    loading: LoadingScreen,

    // Set this to one of the following to enable multiplayer:
    //
    // SocketIO
    //   Implementation that talks to a remote server using socket.io.
    //
    //   How to import:
    //     import { SocketIO } from 'boardgame.io/multiplayer'
    //
    //   Arguments:
    //     Object with 2 parameters
    //        1. 'socketOpts' options to pass directly to socket.io client.
    //        2. 'server' specifies the server location in the format: [http[s]://]hostname[:port];
    //            defaults to current page host.
    //
    // Local
    //   Special local mode that uses an in-memory game master. Useful
    //   for testing multiplayer interactions locally without having to
    //   connect to a server.
    //
    //   How to import:
    //     import { Local } from 'boardgame.io/multiplayer'
    //
    // Additionally, you can write your own transport implementation.
    // See `src/client/client.js` for details.
    multiplayer: Local(),

    // Set to false to disable the Debug UI.
    debug: true,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
