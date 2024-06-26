/**
 * The Deck component represents a deck of cards in the game.
 * It is a functional component that receives props and returns a JSX element.
 *
 * The component receives a `moves` prop which is an object containing game actions.
 * The `Draw` action is attached to the onClick event of the div, allowing the player to draw a card when the deck is clicked.
 *
 * The div is styled and positioned to represent the deck on the game board.
 *
 * @component
 */
export default function Deck(props: { moves: Record<string, (...args: any[]) => void> }) {
    return <div
        style={{top: 278, left: 734}}
        className={"card"}
        onClick={() => props.moves.Draw()}
    />
}