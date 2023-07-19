/* Question : Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

              How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5


function comfortableNumbers(l, r) {
    let comfortableNumberOfPairs = 0;
    function sumOfDigits(a) {
        return a.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
    }
    function isComfortable(n,m) {
        const sumOfDigitsN = sumOfDigits(n), sumOfDigitsM = sumOfDigits(m);
        return m >= (n - sumOfDigitsN) && m <=  (n + sumOfDigitsN) && n >= (m - sumOfDigitsM)
        && n <= (m + sumOfDigitsM) ? 1 : 0
    }
    for (i=l; i<r; i++) {
        for (j=i+1; j<r+1; j++) {
            comfortableNumberOfPairs += isComfortable(i, j)
        }
    }
    return comfortableNumberOfPairs;
}
