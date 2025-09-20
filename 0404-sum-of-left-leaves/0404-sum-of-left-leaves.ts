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

// function sumOfLeftLeaves(root: TreeNode | null): number {
//     // 재귀 헬퍼 함수: isLeft 플래그로 왼쪽 자식인지 판단
//     function dfs(node: TreeNode | null, isLeft: boolean): number {
//         // 노드가 없으면 0 반환
//         if (!node) return 0;

//         // 잎 노드인지 확인 (왼쪽, 오른쪽 자식 모두 null)
//         if (!node.left && !node.right) {
//             // 왼쪽 잎 노드면 값 반환, 아니면 0
//             return isLeft ? node.val : 0;
//         }

//         // 왼쪽 자식은 isLeft=true로, 오른쪽 자식은 isLeft=false로 재귀 호출
//         return dfs(node.left, true) + dfs(node.right, false);
//     }

//     // 루트에서 시작, 루트는 왼쪽 자식이 아니므로 false로 시작
//     return dfs(root, false);
// }

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0;

    let sum = 0;
    const stack: [TreeNode, boolean][] = [[root, false]];

    while (stack.length > 0) {
        const [node, isLeft] = stack.pop();

        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }

        if (node.right) {
            stack.push([node.right, false]);
        }
        if (node.left) {
            stack.push([node.left, true]);
        }
    }

    return sum;
}

function sumOfLeftLeavesStack(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left && !root.right) return 0;

    const result: number[] = [];
    const stack: TreeNode[] = [root];
    while (stack.length > 0) {
        const node = stack.pop();

        if (!node.left && !node.right) result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) {
            if (node.right.left || node.right.right) stack.push(node.right);
        }
    }

    return result.reduce((acc, cur) => acc + cur, 0);
};