import React from "react";

export class MainDeck {
    deck: any;
    positions: { [key: number]: { x: number, empty: boolean } };

    constructor(game: any, player: any) {
        const playerData = game.players[player];
        this.deck = playerData.hand;

        this.positions = {
            1: {x: 321, empty: true},
            2: {x: 381, empty: true},
            3: {x: 441, empty: true},
            4: {x: 501, empty: true},
            5: {x: 561, empty: true},
            6: {x: 621, empty: true},
            7: {x: 681, empty: true},
            8: {x: 741, empty: true},
            9: {x: 801, empty: true},
            10: {x: 861, empty: true},
            11: {x: 921, empty: true},
            12: {x: 981, empty: true}
        };
    }

    toDeck(card: { "type": string, "color": string, "id": number }) {
        let images = [];
        if (this.deck.length <= Object.keys(this.positions).length) {
            let i = 1;
            for (card of this.deck) {
                if (this.positions[i].empty) {
                    images.push(this.cardToImage(card, this.positions[i].x, 565));
                    this.positions[i].empty = false;
                }
                i++;
            }
        }
        return images;
    }

    initializeDeck() {
        let images = [];
        for (const card of this.deck) {
            images.push(...this.toDeck(card));
        }
        return images;
    }

    cardToImage(card: { "type": string, "color": string, "id": number }, x: number, yTop: number) {
        return (
            <img src={`/assets/${card.color}_${card.type}.png`} alt="card"
                 style={{position: 'absolute', top: yTop, left: x, width: '138px', height: '205px'}}/>
        )
    }
}


export class Enemy1Deck {
    deck: any;
    positions: { [key: number]: { y: number, empty: boolean } };

    constructor(game: any, player: any) {
        const playerData = game.players[player];
        this.deck = playerData.hand;

        this.positions = {
            1: {y: 114, empty: true},
            2: {y: 176, empty: true},
            3: {y: 236, empty: true},
            4: {y: 296, empty: true},
            5: {y: 356, empty: true},
            6: {y: 410, empty: true},
            7: {y: 476, empty: true},
            8: {y: 741, empty: true},
            9: {y: 536, empty: true},
            10: {y: 596, empty: true}
        };
    }

    toDeck(card: { "type": string, "color": string, "id": number }) {
        let images = [];
        if (this.deck.length <= Object.keys(this.positions).length) {
            let i = 1;
            for (card of this.deck) {
                if (this.positions[i].empty) {
                    images.push(this.cardToImage(1175, this.positions[i].y));
                    this.positions[i].empty = false;
                }
                i++;
            }
        }
        return images;
    }

    initializeDeck() {
        let images = [];
        for (const card of this.deck) {
            images.push(...this.toDeck(card));
        }
        return images;
    }

    cardToImage(x: number, yTop: number) {
        return (
            <img src={`/assets/TURNED_LEFT_CARD.png`} alt="card"
                 style={{position: 'absolute', top: yTop, left: x, width: '160px', height: '107px'}}/>
        )
    }
}


export class Enemy2Deck {
    deck: any;
    positions: { [key: number]: { y: number, empty: boolean } };

    constructor(game: any, player: any) {
        const playerData = game.players[player];
        this.deck = playerData.hand;

        this.positions = {
            1: {y: 114, empty: true},
            2: {y: 176, empty: true},
            3: {y: 236, empty: true},
            4: {y: 296, empty: true},
            5: {y: 356, empty: true},
            6: {y: 410, empty: true},
            7: {y: 476, empty: true},
            8: {y: 741, empty: true},
            9: {y: 536, empty: true},
            10: {y: 596, empty: true}
        };
    }

    toDeck(card: { "type": string, "color": string, "id": number }) {
        let images = [];
        if (this.deck.length <= Object.keys(this.positions).length) {
            let i = 1;
            for (card of this.deck) {
                if (this.positions[i].empty) {
                    images.push(this.cardToImage(105, this.positions[i].y));
                    this.positions[i].empty = false;
                }
                i++;
            }
        }
        return images;
    }

    initializeDeck() {
        let images = [];
        for (const card of this.deck) {
            images.push(...this.toDeck(card));
        }
        return images;
    }

    cardToImage(x: number, yTop: number) {
        return (
            <img src={`/assets/TURNED_RIGHT_CARD.png`} alt="card"
                 style={{position: 'absolute', top: yTop, left: x, width: '160px', height: '107px'}}/>
        )
    }
}


export class Enemy3Deck {
    deck: any;
    positions: { [key: number]: { x: number, empty: boolean } };

    constructor(game: any, player: any) {
        const playerData = game.players[player];
        this.deck = playerData.hand;

        this.positions = {
            1: {x: 424, empty: true},
            2: {x: 485, empty: true},
            3: {x: 545, empty: true},
            4: {x: 605, empty: true},
            5: {x: 665, empty: true},
            6: {x: 725, empty: true},
            7: {x: 785, empty: true},
            8: {x: 845, empty: true},
            9: {x: 905, empty: true}
        };
    }

    toDeck(card: { "type": string, "color": string, "id": number }) {
        let images = [];
        if (this.deck.length <= Object.keys(this.positions).length) {
            let i = 1;
            for (card of this.deck) {
                if (this.positions[i].empty) {
                    images.push(this.cardToImage(card, this.positions[i].x, 34));
                    this.positions[i].empty = false;
                }
                i++;
            }
        }
        return images;
    }

    initializeDeck() {
        let images = [];
        for (const card of this.deck) {
            images.push(...this.toDeck(card));
        }
        return images;
    }

    cardToImage(card: { "type": string, "color": string, "id": number }, x: number, yTop: number) {
        return (
            <img src={`/assets/CARD.png`} alt="card"
                 style={{position: 'absolute', top: yTop, left: x, width: '109px', height: '161px'}}/>
        )
    }
}