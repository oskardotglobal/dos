import {Card, CardColor, Cards, Serializable} from "$/lib/types";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";
import {optionOf} from "$/lib/functions";
import type * as O from "fp-ts/Option";

export class Deck implements Serializable<Deck> {
    private readonly cards: Card[];

    private constructor(cards: Card[]) {
        this.cards = cards;
    }

    public draw(): O.Option<Card> {
        return optionOf(this.cards.pop());
    }

    public putAtBottom(card: Card) {
        this.cards.unshift(card);
    }

    public deserialize(value: string): Deck {
        const object: SerializableDeck = JSON.parse(value);
        return new Deck(object.cards);
    }

    public serialize(): string {
        const object = <SerializableDeck>{
            cards: this.cards,
        };

        return JSON.stringify(object);
    }

    public static create(random: RandomAPI) {
        let cards: Card[] = [];

        for (const card of Object.values(Cards)) {
            for (let i = 0; i < (card.color == CardColor.COLORLESS ? 4 : 2); i++) {
                cards.push(card);
            }
        }

        cards = random.Shuffle(cards);
        return new Deck(cards);
    }

}

interface SerializableDeck {
    cards: Card[];
}