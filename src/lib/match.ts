import {useEffect, useState} from "react";
import {LobbyClient} from "boardgame.io/client";
import {assert} from "$/lib/util/assertions";
import {serverUrl} from "$/components/menu/NewGame";

/**
 * A hook to get a match to join. <br />
 * Will return match ID, player ID and player credentials to use with a Client.
 * Will join the first available game. If there are no games, a game will be created.
 *
 * @hook
 */
export function useMatch(): [string | null, string | null, string | null] {
    const [matchID, setMatchID] = useState<string | null>(null);
    const [playerID, setPlayerID] = useState<string | null>(null);
    const [playerCredentials, setPlayerCredentials] = useState<string | null>(null);

    const client = new LobbyClient({server: serverUrl});

    useEffect(() => {
        async function fetchMatch() {
            const matches = await client.listMatches("default");
            const match = matches
                    .matches
                    .find(
                        m => !m.gameover
                            && m.players.filter(p => p.name !== undefined).length < 4
                    )?.matchID
                || (await client.createMatch("default", {numPlayers: 4})).matchID;

            assert(match !== null, "Match should have been joined or created by now, matchID should not be null");
            const joinedMatch = await client.joinMatch("default", match, {playerName: Math.random() + "",});

            setPlayerCredentials(joinedMatch.playerCredentials);
            setPlayerID(joinedMatch.playerID);
            setMatchID(match);
        }

        fetchMatch().catch(console.error);
    }, []);

    return [matchID, playerID, playerCredentials];
}