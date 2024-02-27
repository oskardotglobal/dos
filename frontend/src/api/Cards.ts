export enum CardType {
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,

    PLUS_TWO,
    REVERSE,
    SKIP,
    SWAP_CARDS,

    WISH,
    WISH_PLUS_FOUR,
}

export enum CardColor {
    COLORLESS,
    RED,
    BLUE,
    GREEN,
    YELLOW,
}

export class Card {
    private readonly type: CardType;
    private readonly id: number;
    private color: CardColor;

    constructor(type: CardType, color: CardColor, id: number) {
        this.type = type;
        this.id = id;
        this.color = color;
    }

    public getId(): number {
        return this.id;
    }

    public setColor(color: CardColor) {
        this.color = color;
    }

    public getAmount(): number {
        switch (this.type) {
            case CardType.WISH | CardType.WISH_PLUS_FOUR:
                return 4;
            case CardType.ONE | CardType.TWO | CardType.THREE | CardType.FOUR | CardType.FIVE | CardType.SIX | CardType.SEVEN | CardType.EIGHT | CardType.NINE:
                return 2;
            case CardType.PLUS_TWO | CardType.REVERSE | CardType.SKIP | CardType.SWAP_CARDS:
                return 2;

            default:
                return 0;
        }
    }

    public canBePlayedOn(card: Card): boolean {
        if (this.color === CardColor.COLORLESS) {
            return true;
        }

        if (this.type === card.type) {
            return true;
        }

        return this.color === card.color;
    }
}

// TODO: Volksversammlung, Kommunismus, Kapitalismus, etc...
export const Cards = Object.freeze({
    WISH: new Card(CardType.WISH, CardColor.RED, 0),
    WISH_PLUS_FOUR: new Card(CardType.WISH, CardColor.RED, 1),

    RED_ONE: new Card(CardType.ONE, CardColor.RED, 2),
    RED_TWO: new Card(CardType.TWO, CardColor.RED, 3),
    RED_THREE: new Card(CardType.THREE, CardColor.RED, 4),
    RED_FOUR: new Card(CardType.FOUR, CardColor.RED, 5),
    RED_FIVE: new Card(CardType.FIVE, CardColor.RED, 6),
    RED_SIX: new Card(CardType.SIX, CardColor.RED, 7),
    RED_SEVEN: new Card(CardType.SEVEN, CardColor.RED, 8),
    RED_EIGHT: new Card(CardType.EIGHT, CardColor.RED, 9),
    RED_NINE: new Card(CardType.NINE, CardColor.RED, 10),

    RED_PLUS_TWO: new Card(CardType.PLUS_TWO, CardColor.RED, 11),
    RED_REVERSE: new Card(CardType.REVERSE, CardColor.RED, 12),
    RED_SKIP: new Card(CardType.SKIP, CardColor.RED, 13),
    RED_SWAP_CARDS: new Card(CardType.SWAP_CARDS, CardColor.RED, 14),

    BLUE_ONE: new Card(CardType.ONE, CardColor.BLUE, 15),
    BLUE_TWO: new Card(CardType.TWO, CardColor.BLUE, 16),
    BLUE_THREE: new Card(CardType.THREE, CardColor.BLUE, 17),
    BLUE_FOUR: new Card(CardType.FOUR, CardColor.BLUE, 18),
    BLUE_FIVE: new Card(CardType.FIVE, CardColor.BLUE, 19),
    BLUE_SIX: new Card(CardType.SIX, CardColor.BLUE, 20),
    BLUE_SEVEN: new Card(CardType.SEVEN, CardColor.BLUE, 21),
    BLUE_EIGHT: new Card(CardType.EIGHT, CardColor.BLUE, 22),
    BLUE_NINE: new Card(CardType.NINE, CardColor.BLUE, 23),

    BLUE_PLUS_TWO: new Card(CardType.PLUS_TWO, CardColor.BLUE, 24),
    BLUE_REVERSE: new Card(CardType.REVERSE, CardColor.BLUE, 25),
    BLUE_SKIP: new Card(CardType.SKIP, CardColor.BLUE, 26),
    BLUE_SWAP_CARDS: new Card(CardType.SWAP_CARDS, CardColor.BLUE, 27),

    GREEN_ONE: new Card(CardType.ONE, CardColor.GREEN, 28),
    GREEN_TWO: new Card(CardType.TWO, CardColor.GREEN, 29),
    GREEN_THREE: new Card(CardType.THREE, CardColor.GREEN, 30),
    GREEN_FOUR: new Card(CardType.FOUR, CardColor.GREEN, 31),
    GREEN_FIVE: new Card(CardType.FIVE, CardColor.GREEN, 32),
    GREEN_SIX: new Card(CardType.SIX, CardColor.GREEN, 33),
    GREEN_SEVEN: new Card(CardType.SEVEN, CardColor.GREEN, 34),
    GREEN_EIGHT: new Card(CardType.EIGHT, CardColor.GREEN, 35),
    GREEN_NINE: new Card(CardType.NINE, CardColor.GREEN, 36),

    GREEN_PLUS_TWO: new Card(CardType.PLUS_TWO, CardColor.GREEN, 37),
    GREEN_REVERSE: new Card(CardType.REVERSE, CardColor.GREEN, 38),
    GREEN_SKIP: new Card(CardType.SKIP, CardColor.GREEN, 39),
    GREEN_SWAP_CARDS: new Card(CardType.SWAP_CARDS, CardColor.GREEN, 40),

    YELLOW_ONE: new Card(CardType.ONE, CardColor.YELLOW, 41),
    YELLOW_TWO: new Card(CardType.TWO, CardColor.YELLOW, 42),
    YELLOW_THREE: new Card(CardType.THREE, CardColor.YELLOW, 43),
    YELLOW_FOUR: new Card(CardType.FOUR, CardColor.YELLOW, 44),
    YELLOW_FIVE: new Card(CardType.FIVE, CardColor.YELLOW, 45),
    YELLOW_SIX: new Card(CardType.SIX, CardColor.YELLOW, 46),
    YELLOW_SEVEN: new Card(CardType.SEVEN, CardColor.YELLOW, 47),
    YELLOW_EIGHT: new Card(CardType.EIGHT, CardColor.YELLOW, 48),
    YELLOW_NINE: new Card(CardType.NINE, CardColor.YELLOW, 49),

    YELLOW_PLUS_TWO: new Card(CardType.PLUS_TWO, CardColor.YELLOW, 50),
    YELLOW_REVERSE: new Card(CardType.REVERSE, CardColor.YELLOW, 51),
    YELLOW_SKIP: new Card(CardType.SKIP, CardColor.YELLOW, 52),
    YELLOW_SWAP_CARDS: new Card(CardType.SWAP_CARDS, CardColor.YELLOW, 53),

    of: function (id: number) {
        for (const c in Object.values(Cards)) {
            const card = c as unknown as Card;

            if (card.getId() === id) {
                return card;
            }
        }

        return null;
    }
});

function createDeck() {
    const cards: Card[] = [];

    for (const c in Object.values(Cards)) {
        const card = c as unknown as Card;

        for (let i = 0; i < card.getAmount(); i++) {
            cards.push(card);
        }
    }

    return cards;
}

// TODO
function shuffleDeck() {
}