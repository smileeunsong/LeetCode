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

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return null;

    const queue: [TreeNode, number][] = [[root, 1]]
    let currLevel = 1;
    let sum = 0;
    let count = 0;
    const res: number[] = []

    while (queue.length > 0) {
        const [node, level] = queue.shift();

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);

        if (currLevel === level) {
            sum += node.val;
            count += 1;
        } else {
            res.push(sum / count);
            currLevel = level;
            count = 1;
            sum = node.val;
        }
    }

    if (count) res.push(sum / count);

    return res;
};