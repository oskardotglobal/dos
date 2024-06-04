import {Card, Deck, Serializable} from "$/lib/types";
import * as O from "fp-ts/Option";
import {string} from "fp-ts";

export class Player implements Serializable<Player> {
    private readonly hand: Card[];

    private constructor(hand: Card[]) {
        this.hand = hand;
    }

    public addCard(card: Card) {
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

    public deserialize(value: string): Player {
        const object: SerializablePlayer = JSON.parse(value);
        return new Player(object.hand);
    }

    public serialize(): string {
        const object = <SerializablePlayer>{
            hand: this.hand,
        };

        return JSON.stringify(object);
    }

    public static create(deck: Deck) {
        const hand = [];

        for (let i = 0; i < 7; i++) {
            const card = deck.draw();

            if (O.isNone(card)) {
                throw "Nicht genug Karten im Deck während der Initialisierung";
            }

            hand.push(card.value);
        }

        return new Player(hand);
    }
}

interface SerializablePlayer {
    hand: Card[]
}
