/* Q: Check if the given string is a correct time representation of the 24-hour clock. */

// URL : https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function sumUpNumbers(inputString) {
    return inputString.match(/[0-9]+/g) != null ? inputString.match(/[0-9]+/g).map(x=>parseInt(x)).reduce((a,b) => a + b, 0) : 0
}

exports.sumUpNumbers = sumUpNumbers;
