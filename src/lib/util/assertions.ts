export class AssertionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AssertionError";
    }
}

export function assert(condition: boolean, error: string): asserts condition {
    if (!condition) {
        throw new AssertionError(error);
    }
}