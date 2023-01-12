/* Q: Determine if the given character is a digit or not. */

// URL : https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb



function isDigit(symbol) {
    return isNaN(parseInt(symbol)) ? false : true
}

exports.isDigit = isDigit;