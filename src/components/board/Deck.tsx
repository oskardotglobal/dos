import {Player} from "$/lib/types";

/*
Main player positions
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
 */

export default function Deck({player, playerIndex}: { player: Player, playerIndex: number }) {
    const positions = [
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

    return <>
        {
            player.getHand()
                .slice(0, positions.length - 1)
                .map(card => {
                    if (playerIndex === 0) {
                        return <img src={`/assets/${card.color}_${card.type}.png`} alt="card"
                                    style={{
                                        position: "absolute",
                                        top: positions[playerIndex][1],
                                        left: positions[playerIndex][0],
                                        width: "138px",
                                        height: "205px"
                                    }}
                        />;
                    }

                    if (playerIndex === 1) {
                        return <img src={`/assets/BLANK_L.png`} alt="card"
                                    style={{
                                        position: 'absolute',
                                        top: positions[playerIndex][1],
                                        left: positions[playerIndex][0],
                                        width: '160px',
                                        height: '107px'
                                    }}
                        />
                    }
                })
        }
    </>
}