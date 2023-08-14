/* Question : The longest diagonals of a square matrix are defined as follows:

                the first longest diagonal goes from the top left corner to the bottom right one;
                the second longest diagonal goes from the top right corner to the bottom left one.
                Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/Akspcu9ewiYapWkrp


function reverseOnDiagnosis(matrix) {
    for (let i = 0, j = matrix.length - 1; i < matrix.length / 2; i++, j--) {
        [matrix[i][i], matrix[j][j]] = [matrix[j][j], matrix[i][i]];
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    return matrix
}