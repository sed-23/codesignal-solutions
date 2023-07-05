/* Question : You are given a two-digit integer n. Return the sum of its digits. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66 

function addTwoDigits(n) {
    return (n / 10 | 0) + n % 10;
}

exports.addTwoDigits = addTwoDigits;
