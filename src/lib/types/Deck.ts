import {Card, CardColor, Cards} from "$/lib/types";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";
import {optionOf} from "$/lib/functions";
import type * as O from "fp-ts/Option";

export class Deck {
    private readonly cards: Card[];

    public constructor(random: RandomAPI) {
        this.cards = [];

        for (const card of Object.values(Cards)) {
            for (let i = 0; i < (card.color == CardColor.COLORLESS ? 4 : 2); i++) {
                this.cards.push(card);
            }
        }

        this.cards = random.Shuffle(this.cards);
    }

    public draw(): O.Option<Card> {
        return optionOf(this.cards.pop());
    }

    public putAtBottom(card: Card) {
        this.cards.unshift(card);
    }
}