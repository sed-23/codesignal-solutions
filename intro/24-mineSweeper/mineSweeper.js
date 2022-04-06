/* Q: In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup. */

// URL : https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM

function mineSweeper(arr) {
    res = Array.from({length:arr.length},x=>Array.from({length:arr[0].length},x=>0))
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j]) {
                if (i-1 >= 0) {
                    res[i-1][j]++
                    if (j-1 >= 0) {res[i-1][j-1]++}
                    if (j+1 < arr[i].length) {res[i-1][j+1]++}}
                if (j-1 >= 0) {res[i][j-1]++}
                if (j+1 < arr[i].length) {res[i][j+1]++;}
                if (i+1 < arr.length) {
                    res[i+1][j]++
                    if (j-1 >= 0) {res[i+1][j-1]++}
                    if (j+1 < arr[i].length) {res[i+1][j+1]++}}}}}
    return res
}

exports.mineSweeper = mineSweeper;
