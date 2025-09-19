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
function binaryTreePaths(root: TreeNode | null): string[] {
    const result = [];

    function dfs(node: TreeNode | null, path: string): void {
        if (!node) return;

        if (path === '') {
            path = node.val.toString();
        } else {
            path += '->' + node.val.toString();
        }

        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        if (node.left) dfs(node.left, path);
        if (node.right) dfs(node.right, path);
    }

    dfs(root, '');
    return result;
}

function binaryTreePathsStack(root: TreeNode | null): string[] {
    if (!root) return [];

    const result = [];
    const stack: [TreeNode, string][] = [[root, root.val.toString()]];
    while (stack.length > 0) {
        const [node, path] = stack.pop();

        if (node.left) stack.push([node.left, path.concat('->', node.left.val.toString())]);
        if (node.right) stack.push([node.right, path.concat('->', node.right.val.toString())]);
        if (!node.left && !node.right) result.push(path);
    }

    return result;
};