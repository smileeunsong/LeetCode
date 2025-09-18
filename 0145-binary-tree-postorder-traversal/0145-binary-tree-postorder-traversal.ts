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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    
    function postorder(node: TreeNode) {
        if (node.left) postorder(node.left);
        if (node.right) postorder(node.right);
        result.push(node.val);
    }

    postorder(root);
    return result;
};