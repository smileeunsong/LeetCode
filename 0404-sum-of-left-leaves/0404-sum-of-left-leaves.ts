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
    if (!root) return 0;
    if (!root.left && !root.right) return 0;

    const result: number[] = [];
    const stack: TreeNode[] = [root];
    while(stack.length > 0) {
        const node = stack.pop();

        if (!node.left && !node.right) result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) {
            if (node.right.left || node.right.right) stack.push(node.right);
        }
    }

    return result.reduce((acc, cur) => acc + cur, 0);
};