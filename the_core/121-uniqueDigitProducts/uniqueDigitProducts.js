/* Question : Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/oY6FASrCMEqkxwcAC


function uniqueDigitProduct(a) {
    return new Set(a.map(elm => [...`${elm}`].reduce((a,b) => a * b, 1))).size
}
