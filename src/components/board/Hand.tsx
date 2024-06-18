import {CardColor, Player} from "$/lib/api";
import {assert} from "$/lib/util/assertions";
import {useMemo} from "react";

/**
 * A react component representing the hand of a player. <br />
 *
 * Renders the cards in the player's hand.
 * The cards are positioned based on the player index.
 * The cards are clickable and call the `Play` action when clicked.
 *
 * Should a card be a wish card, the component renders a set of buttons allowing the player to choose the wished color.
 *
 * @component
 */
export default function Hand(props: {
    player: Player,
    moves: Record<string, (...args: any[]) => void>
}) {
    const positions = [
        [321, 565],
        [381, 565],
        [441, 565],
        [501, 565],
        [561, 565],
        [621, 565],
        [681, 565],
        [741, 565],
        [801, 565],
        [861, 565],
        [921, 565],
        [981, 565]
    ];

    const hand = useMemo(() => props.player.getHand(), [props.player]);

    return <>
        {
            hand
                .slice(0, Math.min(positions.length, hand.length))
                .map((card, i, _) => {
                    const [x, y] = positions[i];

                    assert(card !== undefined, "No such card");

                    if (card.color === CardColor.COLORLESS) {
                        return <div key={i}>
                            <img
                                src={`/cards/${card.id}.png`}
                                style={{top: y, left: x}}
                                alt={""}
                                className={"card card-player-0"}
                            />

                            <div className={"wish-buttons"} style={{top: y + 200, left: x}}>
                                <button className={"wish-buttons-red"}
                                        onClick={() => props.moves.Play(i, CardColor.RED)}>
                                    r
                                </button>
                                <button className={"wish-buttons-green"}
                                        onClick={() => props.moves.Play(i, CardColor.GREEN)}>
                                    g
                                </button>
                                <button className={"wish-buttons-blue"}
                                        onClick={() => props.moves.Play(i, CardColor.BLUE)}>
                                    b
                                </button>
                                <button className={"wish-buttons-yellow"}
                                        onClick={() => props.moves.Play(i, CardColor.YELLOW)}>
                                    y
                                </button>
                            </div>
                        </div>
                    }

                    return <img
                        src={`/cards/${card.id}.png`}
                        style={{top: y, left: x}}
                        alt={""}
                        className={"card card-player-0"}
                        key={i}
                        onClick={() => props.moves.Play(i)}
                    />
                })
        }
    </>
}