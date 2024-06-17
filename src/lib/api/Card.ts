import type {CardType, CardColor} from "$/lib/api";

export interface Card {
    type: CardType;
    id: number;
    color: CardColor;
}