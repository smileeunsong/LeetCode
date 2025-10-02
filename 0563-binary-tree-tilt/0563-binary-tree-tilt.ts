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

// function sum(node: TreeNode | null): number {
//     if (!node) return 0;
//     if (!node.left && !node.right) return node.val;

//     return sum(node.left) + sum(node.right) + node.val;
// }

// function makeTilt(node: TreeNode) {
//     const leftChildSum = sum(node.left);
//     const rightChildSum = sum(node.right);
//     const tilt = Math.abs(leftChildSum - rightChildSum);

//     return tilt;
// }

// function findTilt(root: TreeNode | null): number {
//     if (!root) return 0;
//     let res: number = 0;

//     const stack: TreeNode[] = [root];
//     while (stack.length > 0) {
//         const node = stack.pop();

//         if (!node.left && !node.right) continue;
//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);

//         res += makeTilt(node)
//     }

//     return res;
// };

// 개선된 풀이
let totalTilt: number = 0;

function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    totalTilt += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
}

function findTilt(root: TreeNode | null): number {
    totalTilt = 0;
    dfs(root);

    return totalTilt;
}