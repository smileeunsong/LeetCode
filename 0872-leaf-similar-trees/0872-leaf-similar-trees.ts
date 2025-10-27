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
function findLeafVal(root: TreeNode): number[] {
    const arr = [];

    function dfs(node: TreeNode): void {
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
        if (!node.left && !node.right) arr.push(node.val);
    }
    dfs(root);

    return arr;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const arr1 = findLeafVal(root1);
    const arr2 = findLeafVal(root2);

    return JSON.stringify(arr1) == JSON.stringify(arr2);
};