import type Card from "$/lib/api/cards/Card";
import Deck from "$/lib/api/Deck";
import DiscardPile from "$/lib/api/DiscardPile";
import {removeIndexFromArray} from "$/lib/utils";

export default interface PlayerData {
    hand: Card[];
}

function play(player: PlayerData, cardIndex: number) {
    if (player.hand[cardIndex] !== undefined) {
        // @ts-expect-error this is covered by the above check
        const shouldDraw = DiscardPile.INSTANCE.put(player.hand[cardIndex]);

        if (shouldDraw) {
            for (let i = 0; i < DiscardPile.INSTANCE.getDrawAmount(); i++) {
                draw(player);
            }

            return;
        }

        player.hand = removeIndexFromArray(player.hand, cardIndex);
    }

    throw "Cannot play card from hand that doesn't exist";
}

function draw(player: PlayerData) {
    const card = Deck.INSTANCE.draw();
    if (card === null) return;

    player.hand.push(card);
}
