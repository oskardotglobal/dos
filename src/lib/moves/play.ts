import type {Move} from "boardgame.io";
import {CardColor, CardType, GameState, SerializableGameState} from "$/lib/api";
import {assert} from "$/lib/util/assertions";
import {INVALID_MOVE} from "boardgame.io/core";

/**
 * Plays a card from the current player's hand. <br />
 * Handles special card effects like reverse, skip, wish and +2/+4 cards.
 *
 * @throws AssertionError if there is no card with the given index in the player's hand.
 * @param cardID The index of the card in the player's hand.
 * @param wishedColor The wished color if the card is a wish card.
 *
 * @move
 */
export const Play: Move<SerializableGameState> = (args, cardID: number, wishedColor: CardColor = CardColor.COLORLESS) => {
    const {
        G: g,
        events,
        ctx,
        random,
    } = args;

    const G = GameState.deserialize(g);

    const player = G.getPlayer(ctx.currentPlayer);
    const hand = player.getHand();

    if (G.checkForceDraw(g, ctx, events)) return;

    assert(hand[cardID] !== undefined, `Card of player ${ctx.currentPlayer} with id ${cardID} not found`);
    const pickedCard = hand[cardID];

    if (!G.discardPile.canPlayOn(pickedCard)) {
        return INVALID_MOVE;
    }

    hand.splice(cardID, 1);
    G.discardPile.put(G.deck, pickedCard);

    switch (pickedCard.type) {
        case CardType.REVERSE:
            G.reverseTurnOrder();
            break;
        case CardType.WISH:
        case CardType.WISH_PLUS_FOUR:
            const card = G.discardPile.peek();
            card.color = wishedColor;

            break;
        case CardType.SWAP_CARDS:
            const shuffleOrder = random.Shuffle(ctx.playOrder);
            for (const [i, id] of shuffleOrder.entries()) {
                const ablage = G.getPlayer(id).getHand();
                G.getPlayer(id).setHand(G.getPlayer(ctx.playOrder[i]).getHand());
                G.getPlayer(ctx.playOrder[i]).setHand(ablage);
            }

            break;
        case CardType.SKIP:
            G.serialize(g);

            events.endTurn({next: ctx.playOrder[(ctx.playOrderPos + 2) % ctx.numPlayers - 1]});
            break;
    }

    G.serialize(g);
    events.endTurn();
};