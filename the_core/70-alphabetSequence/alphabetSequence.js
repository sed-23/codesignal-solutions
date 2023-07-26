/* Question : Check whether the given string is a subsequence of the plaintext alphabet. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/Z9opBsx5fX6XfQJdt


function alphabetSequence(s) {
    return s == [...new Set(s)].sort().join('')
}
