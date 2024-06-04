import React from "react";
import ReactDOM from "react-dom";
import {Client} from "boardgame.io/react";
import {Local} from "boardgame.io/multiplayer";

import {DosGame} from "$/lib/game";
import Board from "$/components/Board";
import LoadingScreen from "$/components/LoadingScreen";

import "$/styles/globals.css";
import Menu from "$/components/Menu";


ReactDOM.render(
    <React.StrictMode>
        <Menu/>
    </React.StrictMode>,
    document.getElementById("root")
);
