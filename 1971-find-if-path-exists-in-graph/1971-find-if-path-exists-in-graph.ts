function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const adj: number[][] = Array.from({ length: n }, () => [])

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited: boolean[] = Array(n).fill(false);
    visited[source] = true;
    const stack: number[] = [source];

    while (stack.length > 0) {
        const cur = stack.pop();
        if (cur === destination) return true;

        for (const next of adj[cur]) {
            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
            }
        }
    }

    return false;
};
