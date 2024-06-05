import React from "react";

export class Stack {
    deck: any;
    positions: {[key: number]: {x: number, empty: boolean}};

    constructor(game: any, player: any) {
        const playerData = game.players[player];
        this.deck = playerData.hand;

        this.positions = {
            1: {x: 568, empty: true},
            2: {x: 734, empty: true}
        };
    }

    toStack(card: {"type":string,"color":string,"id":number}) {
        let images = [];
        if (this.deck.length <= Object.keys(this.positions).length) {
            let i = 1;
            for (card of this.deck) {
                if (this.positions[i].empty) {
                    images.push(this.cardToImage(card, this.positions[i].x, 278));
                    this.positions[i].empty = false;
                }
                i++;
            }
        }
        return images;
    }

    initializeStack() {
        let images = [];
        for (const card of this.deck) {
            images.push(...this.toStack(card));
        }
        return images;
    }

    cardToImage(card: {"type":string,"color":string,"id":number}, x: number, yTop: number) {
        return (
            <img src={`/assets/${card.color}_${card.type}.png`} alt="card"
                 style={{position: 'absolute', top: yTop, left: x, width: '138px', height: '205px'}}/>
        )
    }
}