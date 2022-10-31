/* Q: Find the leftmost digit that occurs in a given string. */

// URL : https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov

function firstDigit(inputArray, k) {
    let i = 0;
    let num; 
    while (parseInt(inputString[i]) != 0 && !parseInt(inputString[i])) {
        i += 1;
    } 
    num = inputString[i];
    return num;
}


exports.firstDigit = firstDigit;