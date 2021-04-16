export type Comparator<T> = (a: T, b: T) => -1 | 0 | 1

export function mergeSort<T>(values: T[], compare: Comparator<T>): T[] {
    if (values.length < 2) {
        return values;
    }

    const mid = values.length >> 1;
    const left = values.slice(0, mid);
    const right = values.slice(mid);

    return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

function merge<T>(left: T[], right: T[], compare: Comparator<T>): T[] {
    const result: T[] = [];

    while (left.length && right.length) {
        if (compare(left[0], right[0]) === -1) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    return [...result, ...left, ...right];
}
