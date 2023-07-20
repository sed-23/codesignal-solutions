/* Question : Determine whether the given string can be obtained by one concatenation of some string to itself. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/book-market/2SDWWyHY9Xw5CpphY


function isTandemRepeat(inputString) {
    s = inputString.slice(0, Math.floor(inputString.length / 2))
    if (s + s === inputString) return true
    return false
}
