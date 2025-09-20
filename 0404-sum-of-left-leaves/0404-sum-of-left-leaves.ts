/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, isLeft: boolean): number {
        if (!node) return 0;

        if (!node.left && !node.right) {
            return isLeft ? node.val : 0;
        }

        return dfs(node.left, true) + dfs(node.right, false);
    }

    return dfs(root, false);
}

function sumOfLeftLeavesStackFlag(root: TreeNode | null): number {
    if (!root) return 0;

    let sum = 0;
    const stack: [TreeNode, boolean][] = [[root, false]];

    while (stack.length > 0) {
        const [node, isLeft] = stack.pop();

        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }

        if (node.right) {
            stack.push([node.right, false]);
        }
        if (node.left) {
            stack.push([node.left, true]);
        }
    }

    return sum;
}

function sumOfLeftLeavesStack(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left && !root.right) return 0;

    const result: number[] = [];
    const stack: TreeNode[] = [root];
    while (stack.length > 0) {
        const node = stack.pop();

        if (!node.left && !node.right) result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) {
            if (node.right.left || node.right.right) stack.push(node.right);
        }
    }

    return result.reduce((acc, cur) => acc + cur, 0);
};