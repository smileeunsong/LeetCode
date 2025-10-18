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

function findTarget(root: TreeNode | null, k: number): boolean {
    // BST를 inorder하면 정렬된 값이 나옴
    const vals: number[] = [];
    function inorder(node: TreeNode | null):void {
        if (!node) return;
        if (node.left) inorder(node.left);
        vals.push(node.val);
        if (node.right) inorder(node.right);
    }

    inorder(root);

    // 투 포인터로 값 찾기
    let left = 0;
    let right = vals.length - 1;
    while (left < right) {
        const sum = vals[left] + vals[right];

        if (k === sum) return true;
        if (k < sum) right--;
        if (k > sum) left++;
    }

    return false;
};