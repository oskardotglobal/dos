import {assert} from "$/lib/functions";
import {type GameState, type PlayerData} from "$/lib/types";
import {type PlayerID} from "boardgame.io";

export function getPlayer(G: GameState, playerID: PlayerID): PlayerData {
    assert(G.players[playerID] !== undefined, `Player with id ${playerID} not found`)

    // @ts-expect-error typescript is stupid
    return G.players[playerID];
}