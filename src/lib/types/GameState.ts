import type {PlayerID} from "boardgame.io";
import type {DiscardPile, Deck, PlayerData} from "$/lib/types";

export interface GameState {
    players: Record<PlayerID, PlayerData>;
    discardPile: DiscardPile;
    deck: Deck;
}