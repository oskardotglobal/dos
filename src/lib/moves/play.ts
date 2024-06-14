import type {Move} from "boardgame.io";
import {CardColor, Cards, CardType, GameState, SerializableGameState} from "$/lib/types";
import {assert} from "$/lib/functions";
import {INVALID_MOVE} from "boardgame.io/core";
import * as O from "fp-ts/Option";

export const Play: Move<SerializableGameState> = ({
                                                      G: g,
                                                      events,
                                                      playerID,
                                                      ctx
                                                  }, cardID: number, wishedColor: CardColor = CardColor.COLORLESS) => {
    const G = GameState.deserialize(g);

    const player = G.getPlayer(playerID);
    const hand = player.getHand();

    if (
        // ist die Karte auf dem Stapel eine +2 oder +4?
        O.getOrElse(() => Cards.BLUE_EIGHT)(G.discardPile.peek()).type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]
        // und hat der Spieler keine +2 oder +4 auf der Hand (die Bedingung, dass der Typ eine +2 oder +4 ist, ist für keine karte auf der Hand wahr)
        && !hand.some((card) => card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])
    ) {
        // dann muss der Spieler Strafkarten ziehen

        for (let i = 0; i < G.discardPile.getDrawAmount(); i++) {
            player.draw(G.deck);
        }

        G.serialize(g);
        events.endTurn();
    }

    assert(hand[cardID] !== undefined, `Card of player ${playerID} with id ${cardID} not found`);
    const pickedCard = hand[cardID]!;

    if (!G.discardPile.canPlayOn(pickedCard)) {
        return INVALID_MOVE;
    }

    delete hand[cardID];
    G.discardPile.put(G.deck, pickedCard);

    switch (pickedCard.type) {
        case CardType.REVERSE:
            break;
        case CardType.WISH:
        case CardType.WISH_PLUS_FOUR:
            const card = G.discardPile.peek();
            if (O.isSome(card)) {
                card.value.color = wishedColor;
            }

            break;
        case CardType.SKIP:
            G.serialize(g);

            const currentIndex = ctx.playOrder.indexOf(playerID);
            events.endTurn({next: ctx.playOrder[(currentIndex + 2) % ctx.numPlayers]});
            break;
    }

    G.serialize(g);
    events.endTurn();
};