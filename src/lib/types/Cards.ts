import {type Card, CardType, CardColor, create} from "$/lib/types";

// TODO: Volksversammlung, Kommunismus, Kapitalismus, etc...
export const Cards = Object.freeze({
    // Special
    WISH: create<Card>({ type: CardType.WISH, color: CardColor.COLORLESS, id: 0 }),
    WISH_PLUS_FOUR: create<Card>({ type: CardType.WISH_PLUS_FOUR, color: CardColor.COLORLESS, id: 1 }),

    // Red
    RED_ZERO: create<Card>({ type: CardType.ZERO, color: CardColor.RED, id: 2 }),
    RED_ONE: create<Card>({ type: CardType.ONE, color: CardColor.RED, id: 3 }),
    RED_TWO: create<Card>({ type: CardType.TWO, color: CardColor.RED, id: 4 }),
    RED_THREE: create<Card>({ type: CardType.THREE, color: CardColor.RED, id: 5 }),
    RED_FOUR: create<Card>({ type: CardType.FOUR, color: CardColor.RED, id: 6 }),
    RED_FIVE: create<Card>({ type: CardType.FIVE, color: CardColor.RED, id: 7 }),
    RED_SIX: create<Card>({ type: CardType.SIX, color: CardColor.RED, id: 8 }),
    RED_SEVEN: create<Card>({ type: CardType.SEVEN, color: CardColor.RED, id: 9 }),
    RED_EIGHT: create<Card>({ type: CardType.EIGHT, color: CardColor.RED, id: 10 }),
    RED_NINE: create<Card>({ type: CardType.NINE, color: CardColor.RED, id: 11 }),

    RED_PLUS_TWO: create<Card>({ type: CardType.PLUS_TWO, color: CardColor.RED, id: 12 }),
    RED_REVERSE: create<Card>({ type: CardType.REVERSE, color: CardColor.RED, id: 13 }),
    RED_SKIP: create<Card>({ type: CardType.SKIP, color: CardColor.RED, id: 14 }),
    RED_SWAP_CARDS: create<Card>({ type: CardType.SWAP_CARDS, color: CardColor.RED, id: 15 }),

    // Yellow
    YELLOW_ZERO: create<Card>({ type: CardType.ZERO, color: CardColor.YELLOW, id: 16 }),
    YELLOW_ONE: create<Card>({ type: CardType.ONE, color: CardColor.YELLOW, id: 17 }),
    YELLOW_TWO: create<Card>({ type: CardType.TWO, color: CardColor.YELLOW, id: 18 }),
    YELLOW_THREE: create<Card>({ type: CardType.THREE, color: CardColor.YELLOW, id: 19 }),
    YELLOW_FOUR: create<Card>({ type: CardType.FOUR, color: CardColor.YELLOW, id: 20 }),
    YELLOW_FIVE: create<Card>({ type: CardType.FIVE, color: CardColor.YELLOW, id: 21 }),
    YELLOW_SIX: create<Card>({ type: CardType.SIX, color: CardColor.YELLOW, id: 22 }),
    YELLOW_SEVEN: create<Card>({ type: CardType.SEVEN, color: CardColor.YELLOW, id: 23 }),
    YELLOW_EIGHT: create<Card>({ type: CardType.EIGHT, color: CardColor.YELLOW, id: 24 }),
    YELLOW_NINE: create<Card>({ type: CardType.NINE, color: CardColor.YELLOW, id: 25 }),

    YELLOW_PLUS_TWO: create<Card>({ type: CardType.PLUS_TWO, color: CardColor.YELLOW, id: 26 }),
    YELLOW_REVERSE: create<Card>({ type: CardType.REVERSE, color: CardColor.YELLOW, id: 27 }),
    YELLOW_SKIP: create<Card>({ type: CardType.SKIP, color: CardColor.YELLOW, id: 28 }),
    YELLOW_SWAP_CARDS: create<Card>({ type: CardType.SWAP_CARDS, color: CardColor.YELLOW, id: 29 }),

    // Green
    GREEN_ZERO: create<Card>({ type: CardType.ZERO, color: CardColor.GREEN, id: 30 }),
    GREEN_ONE: create<Card>({ type: CardType.ONE, color: CardColor.GREEN, id: 31 }),
    GREEN_TWO: create<Card>({ type: CardType.TWO, color: CardColor.GREEN, id: 32 }),
    GREEN_THREE: create<Card>({ type: CardType.THREE, color: CardColor.GREEN, id: 33 }),
    GREEN_FOUR: create<Card>({ type: CardType.FOUR, color: CardColor.GREEN, id: 34 }),
    GREEN_FIVE: create<Card>({ type: CardType.FIVE, color: CardColor.GREEN, id: 35 }),
    GREEN_SIX: create<Card>({ type: CardType.SIX, color: CardColor.GREEN, id: 36 }),
    GREEN_SEVEN: create<Card>({ type: CardType.SEVEN, color: CardColor.GREEN, id: 37 }),
    GREEN_EIGHT: create<Card>({ type: CardType.EIGHT, color: CardColor.GREEN, id: 38 }),
    GREEN_NINE: create<Card>({ type: CardType.NINE, color: CardColor.GREEN, id: 39 }),

    GREEN_PLUS_TWO: create<Card>({ type: CardType.PLUS_TWO, color: CardColor.GREEN, id: 40 }),
    GREEN_REVERSE: create<Card>({ type: CardType.REVERSE, color: CardColor.GREEN, id: 41 }),
    GREEN_SKIP: create<Card>({ type: CardType.SKIP, color: CardColor.GREEN, id: 42 }),
    GREEN_SWAP_CARDS: create<Card>({ type: CardType.SWAP_CARDS, color: CardColor.GREEN, id: 43 }),

    // Blue
    BLUE_ZERO: create<Card>({ type: CardType.ZERO, color: CardColor.BLUE, id: 44 }),
    BLUE_ONE: create<Card>({ type: CardType.ONE, color: CardColor.BLUE, id: 45 }),
    BLUE_TWO: create<Card>({ type: CardType.TWO, color: CardColor.BLUE, id: 46 }),
    BLUE_THREE: create<Card>({ type: CardType.THREE, color: CardColor.BLUE, id: 47 }),
    BLUE_FOUR: create<Card>({ type: CardType.FOUR, color: CardColor.BLUE, id: 48 }),
    BLUE_FIVE: create<Card>({ type: CardType.FIVE, color: CardColor.BLUE, id: 49 }),
    BLUE_SIX: create<Card>({ type: CardType.SIX, color: CardColor.BLUE, id: 50 }),
    BLUE_SEVEN: create<Card>({ type: CardType.SEVEN, color: CardColor.BLUE, id: 51 }),
    BLUE_EIGHT: create<Card>({ type: CardType.EIGHT, color: CardColor.BLUE, id: 52 }),
    BLUE_NINE: create<Card>({ type: CardType.NINE, color: CardColor.BLUE, id: 53 }),

    BLUE_PLUS_TWO: create<Card>({ type: CardType.PLUS_TWO, color: CardColor.BLUE, id: 54 }),
    BLUE_REVERSE: create<Card>({ type: CardType.REVERSE, color: CardColor.BLUE, id: 55 }),
    BLUE_SKIP: create<Card>({ type: CardType.SKIP, color: CardColor.BLUE, id: 56 }),
    BLUE_SWAP_CARDS: create<Card>({ type: CardType.SWAP_CARDS, color: CardColor.BLUE, id: 57 }),
});
