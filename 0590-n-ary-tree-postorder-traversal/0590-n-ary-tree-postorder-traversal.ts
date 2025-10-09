/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    const res: number[] = [];

    function postorderTraversal(node: _Node | null): void {
        if (!node) return;

        if (node.children.length > 0) {
            for (const child of node.children) {
                postorderTraversal(child);
            }
        }
        res.push(node.val);
    }

    postorderTraversal(root);
    
    return res;
};