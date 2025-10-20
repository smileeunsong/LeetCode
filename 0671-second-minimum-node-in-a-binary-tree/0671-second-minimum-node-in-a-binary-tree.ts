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

function findSecondMinimumValue(root: TreeNode | null): number {
    if (!root) return -1;

    const arr: number[] = [];

    function dfs(node: TreeNode) {
        if (!node) return;

        arr.push(node.val);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    dfs(root);

    const set = new Set([...arr]);
    const min = Math.min(...set);
    set.delete(min)

    if (set.size === 0) return -1;
    
    return Math.min(...set);
};