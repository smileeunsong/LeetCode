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

function getMinimumDifference(root: TreeNode | null): number {
    const arr: number[] = [];
    let minVal: number = Infinity;
    
    function inorder(node: TreeNode): void {
        if (!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i-1];
        if (diff < minVal) minVal = diff;
    }
    
    return minVal;
};