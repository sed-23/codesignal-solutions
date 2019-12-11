/* Q: Given the string, check if it is a palindrome. */

// URL : https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ/

function checkPalindrome(inputString) {
    return inputString === inputString.split("").reverse().join("");
}

exports.checkPalindrome = checkPalindrome;
