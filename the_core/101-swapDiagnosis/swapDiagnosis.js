/* Question : The longest diagonals of a square matrix are defined as follows:

                the first longest diagonal goes from the top left corner to the bottom right one;
                the second longest diagonal goes from the top right corner to the bottom left one.
                Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/kfwTN8pdx9uP8bcHS


function swapDiagnosis(matrix) {
    let {length : len} = matrix;
    for (let i = 0; i < len; i++){
        [matrix[i][i], matrix[i][len-i-1]] = [matrix[i][len-i-1], matrix[i][i]];
    }
    return matrix;
}