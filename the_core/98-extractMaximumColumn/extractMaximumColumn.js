/* Question : Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/zwXiykHLor6eKHaLY


function extractMaximumColumn(matrix, column) {
    return matrix.map(x=> x[column])
}
    