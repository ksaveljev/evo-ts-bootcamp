export function generateRandomArray(size: number, limit: number = 200): number[] {
    return Array.from({length: size}, () => Math.floor(Math.random() * limit));
}

export enum SortingStepStatus {
    SORTED,
    NOTHING_TO_SORT
};

export function bubbleSortStep(array: number[]): [SortingStepStatus, number[]] {
    const numbers = [...array];

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i+1]) {
            numbers[i] ^= numbers[i+1];
            numbers[i+1] ^= numbers[i];
            numbers[i] ^= numbers[i+1];
            return [SortingStepStatus.SORTED, numbers];
        }
    }

    return [SortingStepStatus.NOTHING_TO_SORT, numbers];
}
