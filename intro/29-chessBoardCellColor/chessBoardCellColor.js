/* Q: Given two cells on the standard chess board, determine whether they have the same color or not... */

// URL : https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function chessBoardCellColor(cell1, cell2) {
    return (cell1[0].charCodeAt(0) + 1 + +cell1[1]) % 2 === (cell2[0].charCodeAt(0) + 1 + +cell2[1]) % 2
}


exports.chessBoardCellColor = chessBoardCellColor;