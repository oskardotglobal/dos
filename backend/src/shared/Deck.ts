import {Cards} from "./cards/Cards";
import {Card} from "./cards/Card";

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export class Deck {
    private cards: Card[] = [];

    public constructor() {
        for (const card of Object.values(Cards)) {
            for (let i = 0; i < card.getAmount(); i++) {
                this.cards.push(card);
            }
        }
    }

    public shuffle() {
        const result: Card[] = [];

        for (let i = 0; i < this.cards.length; i++) {
            const j = getRandomNumber(0, this.cards.length);

            result[i] = this.cards[j];
            this.cards = this.cards.slice(0, j).concat(this.cards.slice(j + 1));
        }

        this.cards = result;
    }

    public draw() {
        const card = this.cards.pop();

        if (card !== undefined) {
            return card;
        }

        // TODO: Ablagestapel neu mischen und zurück in den Kartenstapel legen
        return null;
    }
}