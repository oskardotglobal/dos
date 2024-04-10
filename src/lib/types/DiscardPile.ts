import type {Card} from "$/lib/types";
import type * as O from "fp-ts/Option";

export interface DiscardPile {
    card: O.Option<Card>;
    drawAmount: number;
}