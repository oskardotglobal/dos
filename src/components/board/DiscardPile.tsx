import {DiscardPile as TDiscardPile} from "$/lib/types";
import * as O from "fp-ts/Option";

export default function DiscardPile(props: { discardPile: TDiscardPile}) {
    const card = props.discardPile.peek();

    return <img
        src={O.isSome(card) ? `/cards/${card.value.id}.png` : `/cards/back.png`}
        style={{ top: 278, left: 568 }}
        alt={""}
        className={"card"}
    />
}