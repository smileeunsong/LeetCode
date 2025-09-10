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

function isBalanced(root: TreeNode | null): boolean {
    function checkHeight(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight = checkHeight(node.left);
        // 왼쪽 서브트리가 이미 불균형이면 -1 반환
        if (leftHeight === -1) return -1;

        const rightHeight = checkHeight(node.right);
        // 오른쪽 서브트리가 이미 불균형이면 -1 반환
        if (rightHeight === -1) return -1;

        // 현재 노드에서 높이 차이가 1 초과면 불균형
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        // 현재 노드의 높이 반환 (더 큰 서브트리 높이 + 1)
        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(root) !== -1;
};