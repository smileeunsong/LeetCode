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

function increasingBST(root: TreeNode | null): TreeNode | null {
    const arr = [];

    function inorder(node: TreeNode) {
        if (!node) return;
        if (node.left) inorder(node.left);
        arr.push(node)
        if (node.right) inorder(node.right);
    }
    inorder(root);

    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].left = null;
        arr[i].right = arr[i+1];
    }
    arr[arr.length - 1].left = null;
    arr[arr.length - 1].right = null;

    return arr[0];
};