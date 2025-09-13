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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    const stack: [TreeNode, number][] = [[root, 1]];
    const leafDepthArr: number[] = [];
    
    while (stack.length > 0) {
        const [node, depth] = stack.pop();

        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);

        if (!node.left && !node.right) leafDepthArr.push(depth);
    }
    
    return Math.min(...leafDepthArr);
};