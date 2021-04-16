import {BinarySearchTree} from "../src/BinarySearchTree";
import {TraverseType} from "../src/BinaryTree";

describe("BinarySearchTree", () => {
    const tree = new BinarySearchTree(23);
    [62, 34, 23, 64, 88, 34, 1, 37, 99, 35].forEach((v) => tree.add(v));

    describe("add", () => {

        test("add new value", () => {
            const tree = new BinarySearchTree(5);
            expect(tree.has(1)).toBeFalsy();
            tree.add(1);
            expect(tree.has(1)).toBeTruthy();
        });

        test("add existing value", () => {
            const tree = new BinarySearchTree(5);
            expect(tree.has(5)).toBeTruthy();
            tree.add(5);
            expect(tree.traverse(TraverseType.BFS)).toEqual([5]);
        });

    });

    describe("has", () => {

        test("existing value", () => {
            expect(tree.has(1)).toBeTruthy();
        });

        test("non-existing value", () => {
            expect(tree.has(2)).toBeFalsy();
        });

    });
});
