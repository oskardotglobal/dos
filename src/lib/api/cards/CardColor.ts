import {match} from "ts-pattern";

enum CardColor {
    COLORLESS = "COLORLESS",
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN",
    YELLOW = "YELLOW",
}

export default CardColor;

const result = match(CardColor.COLORLESS as CardColor)
    .with(CardColor.COLORLESS, () => "It's colorless")
    .with(CardColor.RED, () => "It's red")
    .with(CardColor.BLUE, () => "It's blue")
    .with(CardColor.GREEN, () => "It's green")
    .with(CardColor.YELLOW, () => "It's yellow")
    .exhaustive();