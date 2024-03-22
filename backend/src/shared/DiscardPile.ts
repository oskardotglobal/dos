import {Card} from "./cards/Card";
import {Deck} from "./Deck";
import {CardType} from "./cards/CardType";


/**
 * The discard pile. Contains the current card on top of the pile.
 */
export class DiscardPile {
    private static instance: DiscardPile;
    private card: Card;
    private drawAmount: number = 0;

    private constructor() {
        const firstCard = Deck.INSTANCE.draw();
        if (firstCard === null) throw "No first card available!";

        this.card = firstCard;
    }

    public put(card: Card) {
        let shouldDraw = false;

        if (card.getType() in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]) {
            if (!(this.card.getType() in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])) {
                shouldDraw = true;
                this.drawAmount = 0;
            }

            // Ternary operator
            this.drawAmount += card.getType() === CardType.WISH_PLUS_FOUR ? 4 : 2;
        }

        if (shouldDraw) {
            return true;
        }

        if (this.card !== null) {
            Deck.INSTANCE.put(this.card);
        }

        this.card = card;
        return false;
    }

    public peek() {
        return this.card;
    }

    public getDrawAmount() {
        return this.drawAmount;
    }

    /**
     * Get the instance of the discard pile
     * @constructor
     */
    public static get INSTANCE(): DiscardPile {
        if (!DiscardPile.instance) {
            DiscardPile.instance = new DiscardPile();
        }

        return DiscardPile.instance;
    }
}