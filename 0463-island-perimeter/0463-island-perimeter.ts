function islandPerimeter(grid: number[][]): number {
    const row = grid.length;
    const col = grid[0].length;
    const visited: boolean[][] = Array.from({ length: row }, () => Array(col).fill(false));
    let perimeter = 0;

    // DFS 함수
    function dfs(i: number, j: number): void {
        // 이미 방문했거나 육지가 아니면 종료
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== 1 || visited[i][j]) {
            return;
        }

        // 현재 셀 방문 표시
        visited[i][j] = true;

        // 상하좌우 확인
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 위, 아래, 왼쪽, 오른쪽
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            // 그리드 밖이거나 물(0)이면 둘레 +1
            if (ni < 0 || ni >= row || nj < 0 || nj >= col || grid[ni][nj] === 0) {
                perimeter++;
            }
        }

        // 연결된 이웃 셀로 DFS 재귀 호출
        for (const [di, dj] of directions) {
            dfs(i + di, j + dj);
        }
    }

    // 첫 번째 육지 셀을 찾아 DFS 시작
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                return perimeter; // 섬은 하나뿐이므로 첫 DFS로 끝
            }
        }
    }

    return perimeter;
}

function islandPerimeter2(grid: number[][]): number {
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