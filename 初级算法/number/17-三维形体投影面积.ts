const projectionArea = (grid: number[][]): number => {
    let res = 0;
    const len = grid.length
    for (let i = 0; i < len; i++) {
        let xMax = 0, yMax = 0;
        for (let j = 0; j < len; j++) {
            if (grid[i][j] > xMax) xMax = grid[i][j]

            if (grid[j][i] > yMax) yMax = grid[j][i]

            if (grid[i][j] > 0)
                res += 1;
        }
        res = res + xMax + yMax;
    }
    return res;
};
