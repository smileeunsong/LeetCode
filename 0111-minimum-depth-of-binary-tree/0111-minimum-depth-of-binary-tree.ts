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
function minDepth(root: TreeNode | null): number {
    // 빈 트리면 깊이 0
    if (!root) return 0;

    // 리프 노드면 깊이 1
    if (!root.left && !root.right) return 1;

    // 왼쪽과 오른쪽 자식이 모두 없지 않은 경우
    let leftDepth = root.left ? minDepth(root.left) : Infinity;
    let rightDepth = root.right ? minDepth(root.right) : Infinity;

    // 최소 깊이는 왼쪽/오른쪽 중 작은 값 + 현재 노드(1)
    return Math.min(leftDepth, rightDepth) + 1;
}

function minDepthStack(root: TreeNode | null): number {
    if (!root) return 0;
    const stack: [TreeNode, number][] = [[root, 1]];
    const leafDepthArr: number[] = [];
    
    while (stack.length > 0) {
        const [node, depth] = stack.pop();

        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);

        if (!node.left && !node.right) leafDepthArr.push(depth);
    }
    
    return Math.min(...leafDepthArr);
};