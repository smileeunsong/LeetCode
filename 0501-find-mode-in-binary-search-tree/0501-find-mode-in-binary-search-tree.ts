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
function findMode(root: TreeNode | null): number[] {
    let curVal = 0;
    let curCount = 0;
    let maxCount = 0;
    let modes: number[] = [];

    function handleValue(val: number) {
        if (val !== curVal) {
            curVal = val;
            curCount = 0;
        }
        curCount++;

        if (curCount > maxCount) {
            maxCount = curCount;
            modes = [curVal];
        } else if (curCount === maxCount) {
            modes.push(curVal);
        }
    }

    function inorder(node: TreeNode | null) {
        if (!node) return
        inorder(node.left);
        handleValue(node.val);
        inorder(node.right);
    }

    inorder(root);
    return modes;
}

function findModeFirstTry(root: TreeNode | null): number[] {
    const obj: Record<number, number> = {};
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        const val = Number(node.val);

        if (obj[val]) {
            obj[val] += 1;
        } else {
            obj[val] = 1;
        }

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    const modeVal = Math.max(...Object.values(obj));
    const result: number[] = [];
    for (const [key, value] of Object.entries(obj)) {
        if (value === modeVal) result.push(Number(key))
    }

    return result;
};