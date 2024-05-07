import type {Move} from "boardgame.io";
import {GameState} from "$/lib/types";
import {assert} from "$/lib/functions";
import {TypeOfG} from "$/lib/game";
import {INVALID_MOVE} from "boardgame.io/core";

export const Play: Move<TypeOfG> = ({G: g, events, playerID}, cardID: number) => {
    const G = GameState.fromG(g);
    const player = G.getPlayer(playerID);
    const hand = player.getHand()

    assert(hand[cardID] !== undefined, `Card of player ${playerID} with id ${cardID} not found`);
    const pickedCard = hand[cardID]!;

    if (!G.discardPile.canPlayOn(pickedCard)) {
        return INVALID_MOVE;
    }

    delete hand[cardID];

    const shouldDraw = G.discardPile.put(G.deck, pickedCard);

    if (shouldDraw) {
        for (let i = 0; i < G.discardPile.getDrawAmount(); i++) {
            player.draw(G.deck);
        }
    }

    g.value = G.toG();
    events.endTurn();
};