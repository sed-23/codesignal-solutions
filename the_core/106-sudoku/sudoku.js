/* Question : Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose 
                the grid contains all of the digits from 1 to 9. This algorithm should check if the given grid of numbers represents a correct solution to Sudoku. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/tQgasP8b62JBeirMS


function sudoku(grid) {
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            if (!check(grid, i, j))
                return false;
    return true;
}
function check(grid, x, y){
    for (let i = 0; i < 9; i++){
        if (i!=y&&grid[x][y]==grid[x][i])
            return false;
        if (i!=x&&grid[x][y]==grid[i][y])
            return false;
    }
    let x1 = x - x%3,
        y1 = y - y%3;
    for (let i = x1; i < x1+3; i++)
        for (let j = y1; j < y1+3; j++)
            if (i!=x||j!=y){
                if (grid[i][j]==grid[x][y])
                    return false;
            }
    return true;
}

