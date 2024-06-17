import NewGame from "$/components/menu/NewGame";
import JoinGame from "$/components/menu/JoinGame";
import HowToPlay from "$/components/menu/HowToPlay";
import {useRouter} from "$/router";
import {Lobby} from "boardgame.io/react";
import Board from "$/components/board/Board";
import {DosGame} from "$/lib/game";
import {LobbyClient} from "boardgame.io/client";

/**
 * The main menu component. <br />
 * Redirects to either the New Game screen containing the actual game, the join game screen or the written rules.
 * @see NewGame
 * @see JoinGame
 * @see HowToPlay
 * @component
 */
export default function Menu() {
    const router = useRouter();
    const lobbyClient = new LobbyClient({ server: "http://localhost:8000" });



    return <main
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">

        <h1 className="mb-3 text-6xl font-MajorMonoDisplay text-white">Dos</h1>
        <h3 className="mb-36 text-xl font-MajorMonoDisplay text-white">A card game.</h3>

        <button onClick={() => router.redirect(<NewGame/>)}
                className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">
            New Game
        </button>
        <button onClick={() => router.redirect(<JoinGame/>)}
                className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">
            Join Game
        </button>
        <button onClick={() => router.redirect(<HowToPlay/>)}
                className="px-6 py-2 text-2xl text-white hover:text-gray-200">
            How to Play
        </button>
    </main>
}
