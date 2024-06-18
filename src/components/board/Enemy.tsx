import {CardColor, Player} from "$/lib/api";
import {assert} from "$/lib/util/assertions";
import {useMemo} from "react";

/**
 * A react component representing the an enemy player. <br />
 *
 * Simply shows the amount of cards.
 *
 * @component
 */
export default function Enemy(props: {
    player: Player,
    playerIndex: number
}) {
    const positions = [
        [
            [1175, 114],
            [1175, 176],
            [1175, 236],
            [1175, 296],
            [1175, 356],
            [1175, 410],
            [1175, 476],
            [1175, 536],
            [1175, 596]
        ],
        [
            [125, 114],
            [125, 176],
            [125, 236],
            [125, 296],
            [125, 356],
            [125, 410],
            [125, 476],
            [125, 741],
        ],
        [
            [424, 34],
            [485, 34],
            [545, 34],
            [605, 34],
            [665, 34],
            [725, 34],
            [785, 34],
            [845, 34],
            [905, 34]
        ]
    ];

    const hand = useMemo(() => props.player.getHand(), [props.player]);

    return <>
        {
            Array(...Array(Math.min(positions[props.playerIndex].length, hand.length)).keys())
                .map((i) => {
                    const [x, y] = positions[props.playerIndex][i];

                    return <div
                        className={`card card-player-${props.playerIndex + 1}`}
                        style={{top: y, left: x}}
                        key={props.playerIndex + i}
                    />
                })
        }
    </>
}