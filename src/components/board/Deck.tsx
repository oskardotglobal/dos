export default function Deck(props: { moves: Record<string, (...args: any[]) => void> }) {
    return <div
        style={{top: 278, left: 734}}
        className={"card"}
        onClick={props.moves.Draw}
    />
}