/* Q: Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction. */

// URL : https://app.codesignal.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx

function spiralNumbers(n) {
    let s = new Array(n);
    for (var ae = 0; ae < n; ae++) {
        s[ae] = new Array(n);
    }
    let i = 1;
    let round = 0;
    for (var xy = n; xy > 0; xy -= 2) {
        for (var xr = 0; xr < xy; xr++) {
            s[round][xr + round] = i++;
        }
        for (var yd = round + 1; yd < xy + round; yd++) {
            s[yd][xy - 1 + round] = i++;
        }
        for (var xl = xy - 2 + round; xl >= round; xl--) {
            s[xy - 1 + round][xl] = i++;
        }
        for (var yu = xy - 2 + round; yu > round; yu--) {
            s[yu][round] = i++;
        }
        round++;
    }
    return s;
}


exports.spiralNumbers = spiralNumbers;
