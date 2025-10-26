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

function minDiffInBST(root: TreeNode | null): number {
    const arr: number[] = [];

    function inorder(node: TreeNode) {
        if (!node) return;
        if (node.left) inorder(node.left);
        arr.push(node.val);
        if (node.right) inorder(node.right);
    }

    inorder(root);
    
    let min: number = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const val = Math.abs(arr[i] - arr[i+1]);
        if (val < min) min = val;
    }

    return min;
};