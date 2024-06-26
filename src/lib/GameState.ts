import type {Ctx, PlayerID} from "boardgame.io";
import {
    Player,
    DiscardPile,
    Deck,
    SerializableDeck,
    SerializableDiscardPile,
    SerializablePlayer, CardType,
} from "$/lib/api";
import {assert} from "$/lib/util/assertions";
import {RandomAPI} from "boardgame.io/dist/types/src/plugins/random/random";
import {EventsAPI} from "boardgame.io/dist/types/src/plugins/events/events";

/**
 * The type of `G`. <br />
 *
 * `G` represents all the game's state, the deck, the discard pile and all the players mapped to their respective ids.
 * Additionally, `G` stores whether the game flow is currently reversed or not and provided methods to interact with its properties.
 *
 * @class
 */
export class GameState {
    public readonly players: Record<PlayerID, Player>;
    public readonly discardPile: DiscardPile;
    public readonly deck: Deck;
    private turnOrderReversed: boolean;

    /** the players that want a draw */
    private readonly wantsDraw: PlayerID[];

    private constructor(players: Record<PlayerID, Player>, discardPile: DiscardPile, deck: Deck, turnOrderReversed: boolean, wantsDraw: PlayerID[]) {
        this.deck = deck;
        this.discardPile = discardPile;
        this.players = players;
        this.turnOrderReversed = turnOrderReversed;
        this.wantsDraw = wantsDraw;
    }

    /**
     * Get a player by their id.
     */
    public getPlayer(playerID: PlayerID) {
        assert(this.players[playerID] !== undefined, `Player with id ${playerID} not found`)
        return this.players[playerID];
    }

    public reverseTurnOrder() {
        this.turnOrderReversed = !this.turnOrderReversed;
    }

    public wantDraw(id: PlayerID) {
        if (id in this.wantsDraw) return;
        this.wantsDraw.push(id);
    }

    public endIf(ctx: Ctx): { winner: PlayerID } | { draw: boolean } | void {
        if (this.getPlayer(ctx.currentPlayer).getHand().length === 0) {
            return {winner: ctx.currentPlayer};
        }

        if (this.wantsDraw.length / ctx.numPlayers >= 0.5) {
            return {draw: true}
        }
    }

    public checkForceDraw(g: SerializableGameState, ctx: Ctx, events: EventsAPI): boolean {
        const player = this.getPlayer(ctx.currentPlayer);
        const hand = player.getHand();

        if (
            // ist die Karte auf dem Stapel eine +2 oder +4?
            this.discardPile.peek().type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR]
            // und hat der Spieler keine +2 oder +4 auf der Hand (die Bedingung, dass der Typ eine +2 oder +4 ist, ist für keine karte auf der Hand wahr)
            && !hand.some((card) => card.type in [CardType.PLUS_TWO, CardType.WISH_PLUS_FOUR])
        ) {
            // dann muss der Spieler Strafkarten ziehen

            for (let i = 0; i < this.discardPile.getDrawAmount(); i++) {
                player.draw(this.deck);
            }

            this.serialize(g);
            events.endTurn();

            return true;
        }

        return false;
    }

    /**
     * Convert `G` into `g`. **Make sure to call this before`G` goes out of scope.** <br />
     *
     * All properties that are classes implement the `Serializable` interface. We call `serialize` on those before
     * writing them to `g`. <br />
     *
     * We write the properties one by one to `g` because if we simply overwrite `g`, we will overwrite the reference
     * and have a new object that boardgame.io will no longer be able to access.
     *
     * @see Serializable
     *
     * @method
     */
    public serialize(g: SerializableGameState) {
        const players: Record<PlayerID, SerializablePlayer> = {};

        for (const player of Object.keys(this.players)) {
            players[player] = this.players[player].serialize();
        }

        g.players = players;
        g.deck = this.deck.serialize();
        g.discardPile = this.discardPile.serialize();
        g.turnOrderReversed = this.turnOrderReversed;
        g.wantsDraw = this.wantsDraw;
    }

    /**
     * Convert `g` into `G`. <br />
     *
     * The opposite of serialize.
     *
     * @see serialize
     * @see Serializable
     *
     * @method
     */
    public static deserialize(g: SerializableGameState): GameState {
        const players: Record<PlayerID, Player> = {};

        for (const player of Object.keys(g.players)) {
            players[player] = Player.prototype.deserialize(g.players[player]);
        }

        return new GameState(
            players,
            DiscardPile.prototype.deserialize(g.discardPile),
            Deck.prototype.deserialize(g.deck),
            g.turnOrderReversed,
            g.wantsDraw,
        );
    }

    /**
     * Factory method to put the creation logic into another constructor, due to the fact that JavaScript is fucking stupid
     * and doesn't have polymorph constructors. So in the first original dumb constructor of the class the arguments get
     * directly assigned but the create method contains the logic to create the values and calls the original
     * constructor.
     *
     * @static
     * @method
     */
    public static create(ctx: Ctx, random: RandomAPI): GameState {
        const deck = Deck.create(random);
        const discardPile = DiscardPile.create(deck);
        const players: Record<PlayerID, Player> = {};

        for (const playerId of ctx.playOrder) {
            players[playerId] = Player.create(deck);
        }

        return new GameState(players, discardPile, deck, false, []);
    }
}

/**
 * The type of `g`. <br />
 *
 * Contains only serializable api, no classes. An `interface` in TypeScript describes the type of a *normal* object (called plain object) **or** an instance.
 * This is because due to how JavaScript works instances and objects are **not** the same thing. Only plain objects can be used by boardgame.io,
 * which is why this type does not contain any instance api.
 */
export interface SerializableGameState {
    deck: SerializableDeck;
    players: Record<PlayerID, SerializablePlayer>;
    discardPile: SerializableDiscardPile;
    turnOrderReversed: boolean;
    wantsDraw: PlayerID[];
}
