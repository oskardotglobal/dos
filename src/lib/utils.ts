export function removeIndexFromArray<T>(array: Array<T>, index: number): Array<T> {
    if (index === array.length - 1) {
        array.pop();
        return array;
    }

    if (index < 0 || index >= array.length) {
        throw "Index out of bounds";
    }

    return array.slice(0, index).concat(array.slice(index + 1));
}

/**
 * Create an implementation of type T from an object
 * @template T - the type to create an implementation of
 * @param {T} o - the object which to convert to an implementation of `T`
 */
export function create<T>(o: T) {
    return o;
}
