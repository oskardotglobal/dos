import type {CardType, CardColor} from "$/lib/types";

export interface Card {
    type: CardType;
    id: number;
    color: CardColor;
}