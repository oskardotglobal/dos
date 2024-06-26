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
            [1201, 87],
            [1201, 147],
            [1201, 207],
            [1201, 267],
            [1201, 327],
            [1201, 387],
            [1201, 447],
            [1201, 507],
            [1201, 567]
        ],
        [
            [131, 87],
            [131, 147],
            [131, 207],
            [131, 267],
            [131, 327],
            [131, 387],
            [131, 447],
            [131, 507],
            [1201, 567]
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