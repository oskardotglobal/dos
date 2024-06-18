import { Server, Origins } from "boardgame.io/server";
import { DosGame } from "./src/lib/game";

const server = Server({
    games: [DosGame],
    origins: [
        Origins.LOCALHOST_IN_DEVELOPMENT,
        "https://dos-psi.vercel.app"
    ],
});

await server.run(8000);