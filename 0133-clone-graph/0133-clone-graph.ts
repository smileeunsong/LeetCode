/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    const visited = new Map<_Node, _Node>();

    function dfs(originalNode: _Node): _Node {
        if (!originalNode) return null;
        if (visited.has(originalNode)) return visited.get(originalNode);

        const cloneNode = new _Node(originalNode.val);
        visited.set(originalNode, cloneNode);

        for (const nb of originalNode.neighbors) {
            cloneNode.neighbors.push(dfs(nb))
        }

        return cloneNode;
    }

    return dfs(node);
};