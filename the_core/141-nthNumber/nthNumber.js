/* Question : You are given a string s of characters that contains at least n numbers (here, a number is defined as 
              a consecutive series of digits, where any character immediately to the left and right of the series 
              are not digits). The numbers may contain leading zeros, but it is guaranteed that each number has at 
              least one non-zero digit in it.

              Your task is to find the nth number and return it as a string without leading zeros. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/Rqtm4Yv8GhHYXJYPY


function nthNumber(s, n) {
    var re = new RegExp(`(?:0*(\\d+)\\D*){${n}}`);
    return re.exec(s)[1];
}