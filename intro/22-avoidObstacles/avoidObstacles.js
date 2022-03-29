/* Q: Given a string, find out if its characters can be rearranged to form a palindrome. */

// URL : https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function avoidObstacles(inputArr) {
    for(var n=1;;n++) if(inputArr.every(x=>x%n)) return n
}

exports.avoidObstacles = avoidObstacles;
