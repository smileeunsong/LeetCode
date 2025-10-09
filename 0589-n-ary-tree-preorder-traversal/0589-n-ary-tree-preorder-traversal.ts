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


function preorder(root: _Node | null): number[] {
    const res: number[] = [];

    function preorderTraversal(node: _Node): void {
        if (!node) return;

        res.push(node.val)
        if (node.children.length > 0) {
            for (const child of node.children) {
                preorderTraversal(child);
            }
        }
    }

    preorderTraversal(root);

    return res;
};