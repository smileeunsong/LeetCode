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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    if (!original || !cloned || !target) return null;

    const refMap = new Map<TreeNode, TreeNode>();

    function dfs(oNode: TreeNode | null, cNode: TreeNode | null) {
        if (!oNode || !cNode) return;

        refMap.set(oNode, cNode);
        if (oNode.left) dfs(oNode.left, cNode.left);
        if (oNode.right) dfs(oNode.right, cNode.right);
    }

    dfs(original, cloned);
    console.log(refMap);
    return refMap.get(target);
};