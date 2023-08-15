/* Question : Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix 
                (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/Nh48Nqxb2zGx2NvYK


function crossingSum(matrix, a, b) {
    return matrix[a].reduce((x,y)=>x+y) + matrix.reduce((x,y)=>x+y[b],0) - matrix[a][b]
}