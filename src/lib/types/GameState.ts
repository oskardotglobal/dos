import type {Ctx, PlayerID} from "boardgame.io";
import {
    Player,
    DiscardPile,
    Deck,
    SerializableDeck,
    SerializableDiscardPile,
    SerializablePlayer,
} from "$/lib/types";
import {assert} from "$/lib/functions";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";


export class GameState {
    public readonly players: Record<PlayerID, Player>;
    public readonly discardPile: DiscardPile;
    public readonly deck: Deck;
    private turnOrderReversed: boolean;

    private constructor(players: Record<PlayerID, Player>, discardPile: DiscardPile, deck: Deck, turnOrderReversed: boolean) {
        this.deck = deck;
        this.discardPile = discardPile;
        this.players = players;
        this.turnOrderReversed = turnOrderReversed;
    }

    public getPlayer(playerID: PlayerID) {
        assert(this.players[playerID] !== undefined, `Player with id ${playerID} not found`)
        return this.players[playerID];
    }

    public reverseTurnOrder() {
        this.turnOrderReversed = !this.turnOrderReversed;
    }

    public serialize(g: SerializableGameState) {
        const players: Record<PlayerID, SerializablePlayer> = {};

        for (const player of Object.keys(this.players)) {
            players[player] = this.players[player].serialize();
        }

        g.players = players;
        g.deck = this.deck.serialize();
        g.discardPile = this.discardPile.serialize();
    }

    public static deserialize(object: SerializableGameState): GameState {
        const players: Record<PlayerID, Player> = {};

        for (const player of Object.keys(object.players)) {
            players[player] = Player.prototype.deserialize(object.players[player]);
        }

        return new GameState(
            players,
            DiscardPile.prototype.deserialize(object.discardPile),
            Deck.prototype.deserialize(object.deck),
            object.turnOrderReversed,
        );
    }

    public static create(ctx: Ctx, random: RandomAPI): GameState {
        const deck = Deck.create(random);
        const discardPile = DiscardPile.create(deck);
        const players: Record<PlayerID, Player> = {};

        for (const playerId of ctx.playOrder) {
            players[playerId] = Player.create(deck);
        }

        return new GameState(players, discardPile, deck, false);
    }
}

export interface SerializableGameState {
    deck: SerializableDeck;
    players: Record<PlayerID, SerializablePlayer>;
    discardPile: SerializableDiscardPile;
    turnOrderReversed: boolean;
}
