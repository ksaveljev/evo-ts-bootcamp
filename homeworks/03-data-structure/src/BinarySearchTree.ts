import {BinaryTree, BinaryTreeI, TreeNode} from "./BinaryTree";

interface BinarySearchTreeI extends BinaryTreeI<number> {
    add(value: number): BinarySearchTreeI;
    has(value: number): boolean;
}

export class BinarySearchTree extends BinaryTree<number> implements BinarySearchTreeI {
    constructor(root: number) {
        const treeNode: TreeNode<number> = {
            value: root,
            left: null,
            right: null
        };
        super(treeNode);
    }

    public add(value: number): BinarySearchTree {
        this.root = this.addR(this.root, value);
        return this;
    }

    private addR(node: TreeNode<number> | null, value: number): TreeNode<number> {
        if (node === null) {
            return {
                value,
                left: null,
                right: null
            };
        } else if (value < node.value) {
            node.left = this.addR(node.left, value);
        } else if (value > node.value) {
            node.right = this.addR(node.right, value);
        }

        return node;
    }

    public has(value: number): boolean {
        return this.hasR(this.root, value);
    }

    private hasR(node: TreeNode<number> | null, value: number): boolean {
        if (node === null) {
            return false;
        } else if (value < node.value) {
            return this.hasR(node.left, value);
        } else if (value > node.value) {
            return this.hasR(node.right, value);
        } else {
            return true;
        }
    }
}
