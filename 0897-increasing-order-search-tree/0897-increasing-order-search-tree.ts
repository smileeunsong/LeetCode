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
    const arr: number[] = [];

    function inorder(node: TreeNode) {
        if (node.left) inorder(node.left);
        arr.push(node.val)
        if (node.right) inorder(node.right);
    }
    inorder(root);

    let prevNode: TreeNode | null = null;
    let currNode: TreeNode | null = null;
    for (const val of arr.reverse()) {
        currNode = new TreeNode(val, null, prevNode);
        prevNode = currNode;
    }

    return currNode;
};