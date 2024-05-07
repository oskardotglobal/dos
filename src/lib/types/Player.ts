import {Card, Deck, GameState} from "$/lib/types";
import * as O from "fp-ts/Option";
import {PlayerID} from "boardgame.io";

export class Player {
    private readonly hand: Card[];

    public constructor(deck: Deck) {
        this.hand = [];

        for (let i = 0; i < 7; i++) {
            const card = deck.draw();

            if (O.isNone(card)) {
                throw "Nicht genug Karten im Deck während der Initialisierung";
            }

            this.hand.push(card.value);
        }
    }

    public addCard(card: Card){
        this.hand.push(card);
    }

    public getHand() {
        return this.hand;
    }

    public draw(deck: Deck) {
        const card = deck.draw();

        if (O.isSome(card)) {
            this.hand.push(card.value);
        }
    }
}
