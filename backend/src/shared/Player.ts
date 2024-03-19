import {Card} from "./cards/Card";
import {Deck} from "./Deck";
import {DiscardPile} from "./DiscardPile";
import {removeIndexFromArray} from "./utils";

export class Player {
    private hand: Card[] = [];

    public draw() {
        const card = Deck.INSTANCE.draw();
        if (card === null) return;

        this.hand.push(card);
    }

    public play(cardIndex: number) {
        if (this.hand[cardIndex] !== undefined) {
            DiscardPile.INSTANCE.put(this.hand[cardIndex]);
            this.hand = removeIndexFromArray(this.hand, cardIndex);
        }

        throw "Cannot play card from hand that doesn't exist";
    }

}