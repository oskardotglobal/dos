export * from "./option";

export function err(e: string): never {
    throw e;
}

export function assert(condition: boolean, error: string): asserts condition {
    if (!condition) {
        throw new Error(error);
    }
}