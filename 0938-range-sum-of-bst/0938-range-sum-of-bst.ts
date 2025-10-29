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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    const arr: number[] = [];

    function inorder(node: TreeNode) {
        if (!node) return;
        if (node.left) inorder(node.left);
        arr.push(node.val);
        if (node.right) inorder(node.right);
    }
    inorder(root);

    const lowIdx = arr.findIndex(e => e === low);
    const highIdx = arr.findIndex(e => e === high);
    let result = 0;

    for (let i = lowIdx; i <= highIdx; i++) {
        result += arr[i]
    }

    return result;
};