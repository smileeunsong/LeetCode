function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 1) continue;

            let adjacent = 0;
            if (i > 0 && grid[i-1][j] === 1) adjacent++;
            if (i < grid.length - 1 && grid[i+1][j]) adjacent++;
            if (j > 0 && grid[i][j-1] === 1) adjacent++;
            if (j < grid[i].length - 1 && grid[i][j+1] === 1) adjacent++;

            perimeter += 4 - adjacent;
        }
    }

    return perimeter;
}

function islandPerimeter1(grid: number[][]): number {
    let sum = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 1) continue;

            let adjacent = 0;

            const up = grid[i-1]?.[j] ?? null;
            const down = grid[i+1]?.[j] ?? null;
            const left = grid[i]?.[j-1] ?? null;
            const right = grid[i]?.[j+1] ?? null;

            for (const neighbor of [up, down, left, right]) {
                if (neighbor === 1) adjacent++;
            }

            switch (adjacent) {
                case 0:
                    sum += 4;
                    break;
                case 1:
                    sum += 3;
                    break;
                case 2:
                    sum += 2;
                    break;
                case 3:
                    sum += 1;
                    break;
                case 4:
                    sum += 0;
                    break;
            }
        }
    }

    return sum;
};