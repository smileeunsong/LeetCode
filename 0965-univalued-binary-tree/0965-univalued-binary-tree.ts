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

function isUnivalTree(root: TreeNode | null): boolean {
    if (root === null) return false;

    const set: Set<number> = new Set();
    function dfs(node: TreeNode): void {
        if (!node) return;
        
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
        set.add(node.val);
    }
    dfs(root);

    return set.size === 1 ? true : false;
};