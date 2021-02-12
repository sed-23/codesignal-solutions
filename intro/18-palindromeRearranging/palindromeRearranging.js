/* Q: Given a string, find out if its characters can be rearranged to form a palindrome. */

// URL : https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function palindromeRearranging(inputString) {
    return [...new Set(inputString)].map(i=>inputString.split("").filter(j=>j==i).length%2).reduce((x,y)=>x+y)<=1
}

exports.palindromeRearranging = palindromeRearranging;
