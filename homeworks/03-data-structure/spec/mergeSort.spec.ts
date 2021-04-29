import {mergeSort, Comparator} from "../src/mergeSort";

describe("mergeSort", () => {
    describe("sort numbers", () => {
        const compare: Comparator<number> = (a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }

        test("empty array", () => {
            expect(mergeSort([], compare)).toEqual([]);
        });

        test("array with all sorts of values", () => {
            const values = Array.from({length: 50}, () => Math.floor(Math.random() * 40 - 20));
            const sorted = mergeSort(values, compare);
            expect(sorted).toEqual(values.sort(compare));
        });

    });

    describe("sort objects", () => {
        interface SomeObject {
            x: string;
            y: number;
        }
        const compare: Comparator<SomeObject> = (a, b) => {
            if (a.y < b.y) {
                return -1;
            } else if (a.y > b.y) {
                return 1;
            } else {
                if (a.x.length < b.x.length) {
                    return -1;
                } else if (a.x.length > b.x.length) {
                    return 1;
                } else {
                    return a.x < b.x ? -1 : 1;
                }
            }
        }

        test("empty array", () => {
            expect(mergeSort([], compare)).toEqual([]);
        });

        test("array with all sorts of values", () => {
            const values: SomeObject[] = [
                { x: "longstring", y: 7 },
                { x: "short", y: 10 },
                { x: "someotherstring", y: -5 },
                { x: "long", y: 10 },
                { x: "randomstring", y: 15 }
            ];
            const sorted: SomeObject[] = [
                { x: "someotherstring", y: -5 },
                { x: "longstring", y: 7 },
                { x: "long", y: 10 },
                { x: "short", y: 10 },
                { x: "randomstring", y: 15 }
            ];
            expect(mergeSort(values, compare)).toEqual(sorted);
        });

    });
});
