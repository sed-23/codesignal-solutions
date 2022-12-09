
/* Q: Given a string, output its longest prefix which contains only digits. */

// URL : https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3


function longestDigitsPrefix(inputString) {
    function intConverter(s){
        parsedInt = parseInt(inputString).toString();
        return s[0] == '0' ? '0' + parsedInt : parsedInt;
    }
    return isNaN(parseInt(inputString)) == true || inputString.trimLeft() != inputString ? "" : intConverter(inputString)
}



exports.longestDigitsPrefix = longestDigitsPrefix;