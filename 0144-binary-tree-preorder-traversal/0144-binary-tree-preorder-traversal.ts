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
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];

    function preorder(node: TreeNode) {
        result.push(node.val);
        if (node.left) preorder(node.left);
        if (node.right) preorder(node.right);
    }

    preorder(root);
    return result;
}


function preorderTraversalStack(root: TreeNode | null): number[] {
    if (!root) return [];

    const stack: TreeNode[] = [root];
    const result: number[] = [];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
};