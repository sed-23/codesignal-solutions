
/* Q: Let's define digit degree of some positive integer as the number of times we need to replace this 
    number with the sum of its digits until we get to a one digit number.

    Given an integer, find its digit degree. */

// URL : https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo


function digitDegree(n) {
    if (n < 10) { 
        return 0 
    } else {
        let digitsSum = n, degree = 0;
        do {
            digitsSum = digitsSum.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b), 0) 
            degree += 1
        } while (digitsSum > 9)
        return degree 
    }
}




exports.digitDegree = digitDegree;


