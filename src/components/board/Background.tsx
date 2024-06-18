/**
 * Background component. Renders the background of the game board.
 * It includes various div elements with specific styles and classes to create the visual representation of the game board.
 *
 * Each div represents a different part of the game board, such as the player's deck, the enemy's deck, and the game area.
 *
 * @component
 */
export default function Background() {
    return <div
        className="h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">
        <div style={{position: "absolute", top: "560px", left: "316px", width: "808px", height: "215px"}}
             className="rounded-lg bg-player-deck opacity-20"></div>

        <div style={{position: "absolute", top: "30px", left: "420px", width: "598px", height: "171px"}}
             className="rounded-lg bg-enemy-deck opacity-15"></div>
        <div style={{position: "absolute", top: "109px", left: "1170px", width: "170px", height: "597px"}}
             className="rounded-lg bg-enemy-deck opacity-15"></div>
        <div style={{position: "absolute", top: "109px", left: "100px", width: "170px", height: "597px"}}
             className="rounded-lg bg-enemy-deck opacity-15"></div>

        <div style={{position: "absolute", top: "273px", left: "563px", width: "314px", height: "215px"}}
             className="rounded-lg bg-enemy-deck opacity-15"></div>
    </div>
}