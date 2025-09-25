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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max: number = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight: number = height(node.left);
        const rightHeight: number = height(node.right);

        const curr: number = leftHeight + rightHeight;

        max = Math.max(max, curr);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return max;
};