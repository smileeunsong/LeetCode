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

function postorderTraversalRecursive(root: TreeNode | null): number[] {
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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    const stack: TreeNode[] = [root]
    const result: number[] = [];
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return result.reverse();
}