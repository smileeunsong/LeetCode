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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (!root) return false;

    const queue: [TreeNode, number, number][] = [[root, 0, root.val]];
    let xDepth: number = -1;
    let yDepth: number = -1;
    let xParentVal: number = -1;
    let yParentVal: number = -1;
    
    while (queue.length > 0) {
        const [node, depth, parentVal] = queue.shift();
        
        if (node.left) queue.push([node.left, depth+1, node.val]);
        if (node.right) queue.push([node.right, depth+1, node.val]);
        
        if (node.val === x) {
            xDepth = depth;
            xParentVal = parentVal;
        }

        if (node.val === y) {
            yDepth = depth;
            yParentVal = parentVal;
        }
    }

    return xDepth !== -1 && xDepth === yDepth && xParentVal !== yParentVal
};