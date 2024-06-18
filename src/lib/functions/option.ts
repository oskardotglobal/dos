import * as O from "fp-ts/Option";

export function optionOf<T>(value: T | null | undefined): O.Option<T> {
    return value === null || value === undefined ? O.none : O.some(value);
}

export function getOrErr<T>(option: O.Option<T>, errFn: () => never): T {
    if (O.isNone(option)) {
        errFn();
    }

    return option.value;
}
