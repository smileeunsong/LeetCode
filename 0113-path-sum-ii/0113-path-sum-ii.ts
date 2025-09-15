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
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];

    function dfs(node: TreeNode | null, currSum: number, path: number[]) {
        if (!node) return;

        currSum += node.val;
        path.push(node.val);

        // 리프 노드에서 확인
        if (!node.left && !node.right && currSum === targetSum) {
            result.push([...path]);
        }

        dfs(node.left, currSum, [...path]);
        dfs(node.right, currSum, [...path]);
    }

    dfs(root, 0, []);
    return result;
}

function pathSumStack(root: TreeNode | null, targetSum: number): number[][] {
    if (!root) return [];

    const stack: [TreeNode, number, number[]][] = [[root, root.val, [root.val]]];
    const result: number[][] = [];
    
    while (stack.length > 0) {
        const [node, sum, path] = stack.pop();

        if (!node.left && !node.right && sum === targetSum) result.push([...path]);

        if (node.left) {
            stack.push([node.left, sum + node.left.val, [...path, node.left.val]]);
        }

        if (node.right) {
            stack.push([node.right, sum + node.right.val, [...path, node.right.val]]);
        }
    }

    return result;
};