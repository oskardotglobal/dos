import type {Move} from "boardgame.io";
import {TypeOfG} from "$/lib/game";
import {GameState} from "$/lib/types";
import * as O from "fp-ts/Option";

export * from "./card";
export * from "./option";

export function err(e: string): never {
    throw e;
}

export function assert(condition: boolean, error: string): asserts condition {
    if (!condition) {
        throw new Error(error);
    }
}