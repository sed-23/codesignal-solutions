/* Question : Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all 
                its columns become strictly increasing sequences (read from top to bottom). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/vuXQuYFReJPe6hHAf


function rowsRearranging(matrix) {
    let sorted = matrix.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted[i].length; j++) {
        if (sorted[i][j] >= sorted[i + 1][j]) {
            return false;
        }
        }
    }
    return true;
}
