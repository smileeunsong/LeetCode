/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: _Node | null): number {
    if (!root) return 0;
    if (!root.children.length) return 1;
    let maxChildDepth = 0;

    for (let child of root.children) {
        maxChildDepth = Math.max(maxChildDepth, maxDepth(child))
    }

    return maxChildDepth + 1;
}

function maxDepthStack(root: _Node | null): number {
    if (!root) return 0;

    const stack: [_Node, number][] = [[root, 1]];
    let max: number = 1;

    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        
        if (!node.children.length) {
            max = Math.max(max, depth);
        }
        
        for (let i = 0; i < node.children.length; i++) {
            stack.push([node.children[i], depth + 1]);
        }
    }

    return max;
};