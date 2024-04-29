import type {PlayerID} from "boardgame.io";
import type {DiscardPile, Deck, PlayerData} from "$/lib/types";
import {assert, optionOf} from "$/lib/functions";

export interface IGameState {
    players: Record<PlayerID, PlayerData>;
    discardPile: DiscardPile;
    deck: Deck;
}

export class GameState {
    public readonly players: Record<PlayerID, PlayerData>;
    public readonly discardPile: DiscardPile;
    public readonly deck: Deck;

    public constructor(players: Record<PlayerID, PlayerData>, discardPile: DiscardPile, deck: Deck) {
        this.players = players;
        this.discardPile = discardPile;
        this.deck = deck;
    }

    public draw() {
        return optionOf(this.deck.cards.pop());
    }

    public getPlayer(playerID: PlayerID) {
        assert(this.players[playerID] !== undefined, `Player with id ${playerID} not found`)
        return this.players[playerID];
    }

    public to(G: IGameState) {
        // we need to mutate G here because we can't return a new object since there is no way to update the reference to the new object
        G.deck = this.deck;
        G.discardPile = this.discardPile;
        G.players = this.players;
    }

    // multiple constructors are not allowed in TS
    public static of(G: IGameState) {
        return new GameState(G.players, G.discardPile, G.deck);
    }
}