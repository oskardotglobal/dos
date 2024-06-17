import { Server, Origins } from "boardgame.io/server";
import { DosGame } from "./src/lib/game";

const server = Server({
    games: [DosGame],
    origins: [Origins.LOCALHOST],
});

await server.run(8000);