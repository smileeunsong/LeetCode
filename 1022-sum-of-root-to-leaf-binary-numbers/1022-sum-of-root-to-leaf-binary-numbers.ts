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

// function sumRootToLeaf(root: TreeNode | null): number {
//     let sum = 0;
//     const stack: [TreeNode, string][] = [[root, String(root.val)]];

//     while (stack.length > 0) {
//         const [node, binarySum] = stack.pop();

//         if (node.left) stack.push([node.left, binarySum + node.left.val]);
//         if (node.right) stack.push([node.right, binarySum + node.right.val]);
//         if (!node.left && !node.right) sum += Number.parseInt(binarySum, 2);
//     }

//     return sum;
// };

function sumRootToLeaf(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, pathValue: number): number => {
        if (!node) return 0;

        const newPathValue = (pathValue << 1) | node.val;
        if (!node.left && !node.right) return newPathValue;

        return dfs(node.left, newPathValue) + dfs(node.right, newPathValue);
    };
    return dfs(root, 0);
}