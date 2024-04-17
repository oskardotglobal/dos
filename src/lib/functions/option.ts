import * as O from "fp-ts/Option";
import {P} from "ts-pattern";

export function optionOf<T>(value: T | null | undefined): O.Option<T> {
    return value === null || value === undefined ? O.none : O.some(value);
}

export function getOrErr<T>(option: O.Option<T>, errFn: () => never): T {
    if (O.isNone(option)) {
        errFn();
    }

    return option.value;
}

export const SomeP = <T>() => P.when<O.Option<T>, O.Some<T>, O.None>(O.isSome);
export const NoneP = <T>() => P.when<O.Option<T>, O.None, O.Some<T>>(O.isNone);
