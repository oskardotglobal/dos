export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

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