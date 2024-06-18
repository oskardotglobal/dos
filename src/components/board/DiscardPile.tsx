import {CardType, DiscardPile as TDiscardPile} from "$/lib/api";
import {useMemo} from "react";

/**
 * A react component representing the discard pile. <br />
 * Renders the top card of the discard pile.
 * Adds a border indicating the wished color to the card if it is a wish card.
 * @component
 */
export default function DiscardPile(props: { discardPile: TDiscardPile }) {
    const card = useMemo(() => props.discardPile.peek(), [props.discardPile]);

    if (card.type === CardType.WISH || card.type === CardType.WISH_PLUS_FOUR) {
        return <img
            src={`/cards/${card.id}.png`}
            style={{top: 278, left: 568, border: `5px solid ${card.color.toLowerCase()}`}}
            alt={""}
            className={"card"}
        />
    }

    return <img
        src={`/cards/${card.id}.png`}
        style={{top: 278, left: 568}}
        alt={""}
        className={"card"}
    />
}