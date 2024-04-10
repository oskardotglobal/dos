export * from "./Card";
export * from "./CardColor";
export * from "./CardType";
export * from "./Cards";
export * from "./GameState";
export * from "./PlayerData";
export * from "./DiscardPile";
export * from "./Deck";

/**
 * Create an implementation of type T from an object
 * @template T - the type to create an implementation of
 * @param {T} o - the object which to convert to an implementation of `T`
 */
export function create<T>(o: T): T {
    return o;
}