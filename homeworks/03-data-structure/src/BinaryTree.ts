export type TreeNode<T> = {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}

export enum TraverseType {
    DFS_PREORDER,
    DFS_INORDER,
    DFS_POSTORDER,
    BFS
}

export interface BinaryTreeI<T> {
    setTree(tree: TreeNode<T>): this;
    traverse(type: TraverseType): T[];
    getColumn(column: number): T[];
}

export class BinaryTree<T> implements BinaryTreeI<T> {
    constructor (protected root: TreeNode<T>) {
    }

    public setTree(node: TreeNode<T>): this {
        this.root = node;
        return this;
    }

    public getTree(): TreeNode<T> {
        return this.root;
    }

    public traverse(traverseType: TraverseType): T[] {
        switch (traverseType) {
            case TraverseType.DFS_PREORDER:
                return this.dfsPreorder(this.root);

            case TraverseType.DFS_INORDER:
                return this.dfsInorder(this.root);

            case TraverseType.DFS_POSTORDER:
                return this.dfsPostorder(this.root);

            case TraverseType.BFS:
                return this.bfs(this.root);

            default:
                UnreachableCode(traverseType);
        }
    }

    public getColumn(column: number): T[] {
        return this.dfsColumn(this.root, 0, column);
    }

    private dfsColumn(node: TreeNode<T> | null, currentColumn: number, expectedColumn: number): T[] {
        if (node === null) {
            return [];
        }

        const result: T[] = [];

        if (currentColumn === expectedColumn) {
            result.push(node.value);
        }

        result.push(...this.dfsColumn(node.left, currentColumn - 1, expectedColumn));
        result.push(...this.dfsColumn(node.right, currentColumn + 1, expectedColumn));

        return result;
    }

    private dfsPreorder(node: TreeNode<T> | null): T[] {
        if (node === null) {
            return [];
        }
        return [node.value, ...this.dfsPreorder(node.left), ...this.dfsPreorder(node.right)];
    }

    private dfsInorder(node: TreeNode<T> | null): T[] {
        if (node === null) {
            return [];
        }
        return [...this.dfsInorder(node.left), node.value, ...this.dfsInorder(node.right)];
    }

    private dfsPostorder(node: TreeNode<T> | null): T[] {
        if (node === null) {
            return [];
        }
        return [...this.dfsPostorder(node.left), ...this.dfsPostorder(node.right), node.value];
    }

    private bfs(node: TreeNode<T>): T[] {
        const result: T[] = [];

        const queue: TreeNode<T>[] = [node];
        while (true) {
            const currentNode = queue.shift();
            if (!currentNode) {
                break;
            }

            result.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

function UnreachableCode(_: never): never {
    throw new Error("This shouldn't ever happen");
}
