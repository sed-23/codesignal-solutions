/* Q: Given an array of strings, return another array containing all of its longest strings.
    Example
    For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
    allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */

// URL : https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function allLongestStrings(inputArray) {
    arr = [inputArray[0]];
    inputArray.forEach(element => {
        if (arr[0].length < element.length ) { 
            arr = [element]
        } else if (arr[0].length == element.length) {
            arr.push(element)
        } 
    });
    return arr[0] == inputArray[0] ? arr.slice(1) : arr
}

exports.allLongestStrings = allLongestStrings;