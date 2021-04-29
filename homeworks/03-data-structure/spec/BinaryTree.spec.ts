import {BinaryTree, TreeNode, TraverseType} from "../src/BinaryTree";

describe("BinaryTree", () => {
    const smallTreeNode: TreeNode<number> = {
        value: 5,
        left: null,
        right: null
    };

    /*              20
     *             /  \
     *          77     83
     *         / \    /
     *       15  23  14
     */
    const bigTreeNode: TreeNode<number> = {
        value: 20,
        left: {
            value: 77,
            left: {
                value: 15,
                left: null,
                right: null
            },
            right: {
                value: 23,
                left: null,
                right: null
            }
        },
        right: {
            value: 83,
            left: {
                value: 14,
                left: null,
                right: null
            },
            right: null
        }
    };

    const smallTree = new BinaryTree(smallTreeNode);
    const bigTree = new BinaryTree(bigTreeNode);

    describe("getColumn", () => {

        test("just root", () => {
            expect(smallTree.getColumn(0)).toEqual([5]);
        });

        test("no such column", () => {
            expect(smallTree.getColumn(-1)).toEqual([]);
        });

        test("positive column", () => {
            expect(bigTree.getColumn(1)).toEqual([83]);
        });

        test("negative column", () => {
            expect(bigTree.getColumn(-2)).toEqual([15]);
        });

        test("0 column", () => {
            expect(bigTree.getColumn(0)).toEqual([20, 23, 14]);
        });

    });

    describe("traverse", () => {

        test("DFS preorder", () => {
            expect(bigTree.traverse(TraverseType.DFS_PREORDER)).toEqual([20, 77, 15, 23, 83, 14]);
        });

        test("DFS inorder", () => {
            expect(bigTree.traverse(TraverseType.DFS_INORDER)).toEqual([15, 77, 23, 20, 14, 83]);
        });

        test("DFS postorder", () => {
            expect(bigTree.traverse(TraverseType.DFS_POSTORDER)).toEqual([15, 23, 77, 14, 83, 20]);
        });

        test("BFS", () => {
            expect(bigTree.traverse(TraverseType.BFS)).toEqual([20, 77, 83, 15, 23, 14]);
        });

    });

    describe("getColumn/setColumn", () => {

        test("substitute root", () => {
            const bigTree = new BinaryTree(bigTreeNode);
            expect(bigTree.getTree()).toEqual(bigTreeNode);
            bigTree.setTree(smallTreeNode);
            expect(bigTree.getTree()).toEqual(smallTreeNode);
        });

        test("substitute root again", () => {
            const smallTree = new BinaryTree(smallTreeNode);
            expect(smallTree.getTree()).toEqual(smallTreeNode);
            smallTree.setTree(bigTreeNode);
            expect(smallTree.getTree()).toEqual(bigTreeNode);
        });

    });
});
