/* Q: Correct variable names consist only of English letters, digits and underscores and they can't start with a digit. Check if the given string is a correct variable name. */

// URL : https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno

function variableName(n) {
    return /^[a-z_]\w*$/i.test(n)
}

exports.variableName = variableName;
