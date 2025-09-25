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
function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let max: number = 0;
    const stack: TreeNode[] = [root];
    const heights: Map<TreeNode, number> = new Map();
    const visited: Set<TreeNode> = new Set();

    while (stack.length > 0) {
        const node = stack[stack.length - 1];

        if (!visited.has(node)) {
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            visited.add(node);
            continue;
        }

        // postorder: 왼쪽, 오른쪽 처리 후 현재 노드
        stack.pop();

        const leftHeight = node.left ? heights.get(node.left) : 0;
        const rightHeight = node.right ? heights.get(node.right) : 0;

        const curr = leftHeight + rightHeight;

        max = Math.max(max, curr);

        heights.set(node, Math.max(leftHeight, rightHeight) + 1);
    }

    return max;
}

function diameterOfBinaryTreeRecursive(root: TreeNode | null): number {
    let max: number = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight: number = height(node.left);
        const rightHeight: number = height(node.right);

        const curr: number = leftHeight + rightHeight;

        max = Math.max(max, curr);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return max;
};