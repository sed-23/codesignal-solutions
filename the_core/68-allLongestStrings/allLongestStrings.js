/* Question : Given an array of strings, return another array containing all of its longest strings. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/fzsCQGYbxaEcTr2bL


function allLongestStrings(inputArray) {
    l=Math.max(...inputArray.map(x=>x.length))
    return inputArray.filter(x=>x.length==l)

}
