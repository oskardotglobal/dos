import {Cards} from "./Cards";
import {CardType} from "./CardType";
import {CardColor} from "./CardColor";

export class Card {
    private readonly type: CardType;
    private readonly id: number;
    private color: CardColor;

    public constructor(type: CardType, color: CardColor, id: number) {
        this.type = type;
        this.id = id;
        this.color = color;
    }

    public getId(): number {
        return this.id;
    }

    public setColor(color: CardColor) {
        this.color = color;
    }

    public getAmount(): number {
        switch (this.type) {
            case CardType.WISH:
                return 4;
            case CardType.WISH_PLUS_FOUR:
                return 4;

            case CardType.ONE:
                return 2;
            case CardType.TWO:
                return 2;
            case CardType.THREE:
                return 2;
            case CardType.FOUR:
                return 2;
            case CardType.FIVE:
                return 2;
            case CardType.SIX:
                return 2;
            case CardType.SEVEN:
                return 2;
            case CardType.EIGHT:
                return 2;
            case CardType.NINE:
                return 2;

            case CardType.PLUS_TWO:
                return 2;
            case CardType.REVERSE:
                return 2;
            case CardType.SKIP:
                return 2;
            case CardType.SWAP_CARDS:
                return 2;

            default:
                throw "Invalid card type, this should never happen";
        }
    }

    public canPlayOn(card: Card): boolean {
        if (this.color === CardColor.COLORLESS) {
            return true;
        }

        if (this.type === card.type) {
            return true;
        }

        return this.color === card.color;
    }

    static of(id: number) {
        for (const card of Object.values(Cards)) {

            if (card.getId() === id) {
                return card;
            }
        }

        return null;
    }
}