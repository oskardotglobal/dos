import {Card, Deck, Serializable} from "$/lib/types";
import * as O from "fp-ts/Option";

export class Player implements Serializable<Player, SerializablePlayer> {
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

    public deserialize(object: SerializablePlayer): Player {
        return new Player(object.hand);
    }

    public serialize(): SerializablePlayer {
        return <SerializablePlayer>{
            hand: this.hand,
        };
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

export interface SerializablePlayer {
    hand: Card[]
}
