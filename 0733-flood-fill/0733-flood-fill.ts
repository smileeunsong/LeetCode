function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;

    image[sr][sc] = color;

    const m = image.length;
    const n = image[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const stack: [number, number][] = [[sr, sc]];

    while (stack.length > 0) {
        const [r, c] = stack.pop();

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && image[nr][nc] === originalColor) {
                image[nr][nc] = color;
                stack.push([nr, nc]);
            }
        }
    }

    return image;
};