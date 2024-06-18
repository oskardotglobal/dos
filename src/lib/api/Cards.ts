import {type Card, CardType, CardColor} from "$/lib/api";

// TODO: Volksversammlung, Kommunismus, Kapitalismus, etc...
export const Cards = Object.freeze({
    // Special
    WISH: <Card>{type: CardType.WISH, color: CardColor.COLORLESS, id: 0},
    WISH_PLUS_FOUR: <Card>{type: CardType.WISH_PLUS_FOUR, color: CardColor.COLORLESS, id: 1},

    // Red
    RED_ZERO: <Card>{type: CardType.ZERO, color: CardColor.RED, id: 2},
    RED_ONE: <Card>{type: CardType.ONE, color: CardColor.RED, id: 3},
    RED_TWO: <Card>{type: CardType.TWO, color: CardColor.RED, id: 4},
    RED_THREE: <Card>{type: CardType.THREE, color: CardColor.RED, id: 5},
    RED_FOUR: <Card>{type: CardType.FOUR, color: CardColor.RED, id: 6},
    RED_FIVE: <Card>{type: CardType.FIVE, color: CardColor.RED, id: 7},
    RED_SIX: <Card>{type: CardType.SIX, color: CardColor.RED, id: 8},
    RED_SEVEN: <Card>{type: CardType.SEVEN, color: CardColor.RED, id: 9},
    RED_EIGHT: <Card>{type: CardType.EIGHT, color: CardColor.RED, id: 10},
    RED_NINE: <Card>{type: CardType.NINE, color: CardColor.RED, id: 11},

    RED_PLUS_TWO: <Card>{type: CardType.PLUS_TWO, color: CardColor.RED, id: 12},
    RED_REVERSE: <Card>{type: CardType.REVERSE, color: CardColor.RED, id: 13},
    RED_SKIP: <Card>{type: CardType.SKIP, color: CardColor.RED, id: 14},
    RED_SWAP_CARDS: <Card>{type: CardType.SWAP_CARDS, color: CardColor.RED, id: 15},

    // Blue
    BLUE_ZERO: <Card>{type: CardType.ZERO, color: CardColor.BLUE, id: 16},
    BLUE_ONE: <Card>{type: CardType.ONE, color: CardColor.BLUE, id: 17},
    BLUE_TWO: <Card>{type: CardType.TWO, color: CardColor.BLUE, id: 18},
    BLUE_THREE: <Card>{type: CardType.THREE, color: CardColor.BLUE, id: 19},
    BLUE_FOUR: <Card>{type: CardType.FOUR, color: CardColor.BLUE, id: 20},
    BLUE_FIVE: <Card>{type: CardType.FIVE, color: CardColor.BLUE, id: 21},
    BLUE_SIX: <Card>{type: CardType.SIX, color: CardColor.BLUE, id: 22},
    BLUE_SEVEN: <Card>{type: CardType.SEVEN, color: CardColor.BLUE, id: 23},
    BLUE_EIGHT: <Card>{type: CardType.EIGHT, color: CardColor.BLUE, id: 24},
    BLUE_NINE: <Card>{type: CardType.NINE, color: CardColor.BLUE, id: 25},

    BLUE_PLUS_TWO: <Card>{type: CardType.PLUS_TWO, color: CardColor.BLUE, id: 26},
    BLUE_REVERSE: <Card>{type: CardType.REVERSE, color: CardColor.BLUE, id: 27},
    BLUE_SKIP: <Card>{type: CardType.SKIP, color: CardColor.BLUE, id: 28},
    BLUE_SWAP_CARDS: <Card>{type: CardType.SWAP_CARDS, color: CardColor.BLUE, id: 29},

    // Green
    GREEN_ZERO: <Card>{type: CardType.ZERO, color: CardColor.GREEN, id: 30},
    GREEN_ONE: <Card>{type: CardType.ONE, color: CardColor.GREEN, id: 31},
    GREEN_TWO: <Card>{type: CardType.TWO, color: CardColor.GREEN, id: 32},
    GREEN_THREE: <Card>{type: CardType.THREE, color: CardColor.GREEN, id: 33},
    GREEN_FOUR: <Card>{type: CardType.FOUR, color: CardColor.GREEN, id: 34},
    GREEN_FIVE: <Card>{type: CardType.FIVE, color: CardColor.GREEN, id: 35},
    GREEN_SIX: <Card>{type: CardType.SIX, color: CardColor.GREEN, id: 36},
    GREEN_SEVEN: <Card>{type: CardType.SEVEN, color: CardColor.GREEN, id: 37},
    GREEN_EIGHT: <Card>{type: CardType.EIGHT, color: CardColor.GREEN, id: 38},
    GREEN_NINE: <Card>{type: CardType.NINE, color: CardColor.GREEN, id: 39},

    GREEN_PLUS_TWO: <Card>{type: CardType.PLUS_TWO, color: CardColor.GREEN, id: 40},
    GREEN_REVERSE: <Card>{type: CardType.REVERSE, color: CardColor.GREEN, id: 41},
    GREEN_SKIP: <Card>{type: CardType.SKIP, color: CardColor.GREEN, id: 42},
    GREEN_SWAP_CARDS: <Card>{type: CardType.SWAP_CARDS, color: CardColor.GREEN, id: 43},

    // Yellow
    YELLOW_ZERO: <Card>{type: CardType.ZERO, color: CardColor.YELLOW, id: 44},
    YELLOW_ONE: <Card>{type: CardType.ONE, color: CardColor.YELLOW, id: 45},
    YELLOW_TWO: <Card>{type: CardType.TWO, color: CardColor.YELLOW, id: 46},
    YELLOW_THREE: <Card>{type: CardType.THREE, color: CardColor.YELLOW, id: 47},
    YELLOW_FOUR: <Card>{type: CardType.FOUR, color: CardColor.YELLOW, id: 48},
    YELLOW_FIVE: <Card>{type: CardType.FIVE, color: CardColor.YELLOW, id: 49},
    YELLOW_SIX: <Card>{type: CardType.SIX, color: CardColor.YELLOW, id: 50},
    YELLOW_SEVEN: <Card>{type: CardType.SEVEN, color: CardColor.YELLOW, id: 51},
    YELLOW_EIGHT: <Card>{type: CardType.EIGHT, color: CardColor.YELLOW, id: 52},
    YELLOW_NINE: <Card>{type: CardType.NINE, color: CardColor.YELLOW, id: 53},

    YELLOW_PLUS_TWO: <Card>{type: CardType.PLUS_TWO, color: CardColor.YELLOW, id: 54},
    YELLOW_REVERSE: <Card>{type: CardType.REVERSE, color: CardColor.YELLOW, id: 55},
    YELLOW_SKIP: <Card>{type: CardType.SKIP, color: CardColor.YELLOW, id: 56},
    YELLOW_SWAP_CARDS: <Card>{type: CardType.SWAP_CARDS, color: CardColor.YELLOW, id: 57},
});
