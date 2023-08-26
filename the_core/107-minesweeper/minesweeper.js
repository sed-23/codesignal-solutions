/* Question : In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total 
                number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/ZMR5n7vJbexnLrgaM


function minesweeper(matrix) {
    let res = [];
    const isValid = ((matrix, x, y) =>x>=0&&x<matrix.length&&y>=0&&y<matrix[0].length);
    for (let i = 0; i < matrix.length; i++){
        res.push([]);
        for (let j = 0; j < matrix[0].length; j++){
            let c = 0;
            for (let dx = -1; dx <= 1; dx++)
                for (let dy = -1; dy <=1 ; dy++)
                    if (dx!=0||dy!=0)
                        if (isValid(matrix, i+dx, j+dy)&&matrix[i+dx][j+dy])
                            c++;
            res[i].push(c);
        }
    }
    return res;
}