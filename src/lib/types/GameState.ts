import type {Ctx, PlayerID} from "boardgame.io";
import {Player, DiscardPile, Deck} from "$/lib/types";
import {assert} from "$/lib/functions";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";
import {instanceToPlain, plainToInstance, Type} from "class-transformer";
import {TypeOfG} from "$/lib/game";

import "reflect-metadata";

export class GameState {
    @Type(() => Player)
    public readonly players: Record<PlayerID, Player>;

    @Type(() => DiscardPile)
    public readonly discardPile: DiscardPile;

    @Type(() => Deck)
    public readonly deck: Deck;

    public constructor(ctx: Ctx, random: RandomAPI) {
        this.deck = new Deck(random);
        this.discardPile = new DiscardPile(this.deck);
        this.players = {};

        for (const playerId of ctx.playOrder) {
            this.players[playerId] = new Player(this.deck);
        }
    }

    public getPlayer(playerID: PlayerID) {
        assert(this.players[playerID] !== undefined, `Player with id ${playerID} not found`)
        return this.players[playerID];
    }

    public toG() {
        return {value: instanceToPlain(this)};
    }

    public static fromG(g: TypeOfG) {
        return plainToInstance(GameState, g);
    }
}