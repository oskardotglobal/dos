import {Card} from "./cards/Card";
import {Deck} from "./Deck";
import {DiscardPile} from "./DiscardPile";
import {removeIndexFromArray} from "./utils";

export class Player {
    private readonly name: string;
    private hand: Card[] = [];

    public constructor(name: string) {
        this.name = name;
    }

    public draw() {
        const card = Deck.INSTANCE.draw();
        if (card === null) return;

        this.hand.push(card);
    }

    public play(cardIndex: number) {
        if (this.hand[cardIndex] !== undefined) {
            const shouldDraw = DiscardPile.INSTANCE.put(this.hand[cardIndex]);

            if (shouldDraw) {
                for (let i = 0; i < DiscardPile.INSTANCE.getDrawAmount(); i++) {
                    this.draw();
                }

                return;
            }

            this.hand = removeIndexFromArray(this.hand, cardIndex);
        }

        throw "Cannot play card from hand that doesn't exist";
    }

    public getCardAmount() {
        return this.hand.length;
    }

    public getHand() {
        return this.hand;
    }

    public getName() {
        return this.name;
    }
}