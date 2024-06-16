import {Card, Player} from "$/lib/types";
import {assert} from "$/lib/functions";

export default function Hand(props: {
    player: Player,
    playerIndex: number,
    moves: Record<string, (...args: any[]) => void>
}) {
    const positions = [
        [
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
        ],
        [
            [1175, 114],
            [1175, 176],
            [1175, 236],
            [1175, 296],
            [1175, 356],
            [1175, 410],
            [1175, 476],
            [1175, 741],
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
            [125, 536],
            [125, 596]
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

    const hand = props.player.getHand();

    return <>
        {
            hand
                .slice(0, Math.min(positions[props.playerIndex].length, hand.length))
                .shift() || ([] as Card[])
                .map((card, i, _) => {
                    const [x, y] = positions[props.playerIndex][i];
                    const style = {top: y, left: x};

                    assert(card !== undefined, "No such card");

                    if (props.playerIndex === 0) {
                        return <img
                            src={`/cards/${card.id}.png`}
                            style={style}
                            alt={""}
                            className={"card card-player-0"}
                            key={i}
                            onClick={() => props.moves.Play(i)}
                        />
                    }

                    return <div className={`card card-player-${props.playerIndex}`} style={style}
                                key={props.playerIndex + i}/>
                })
        }
    </>
}