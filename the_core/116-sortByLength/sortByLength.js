/* Question : Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/QQB7f8ouAqY6jf7xi


function sortByLength(inputArray) {
    let indexes = inputArray.map((_, i) => i);
    indexes.sort((ia, ib) => inputArray[ia].length - inputArray[ib].length || ia - ib);
    return indexes.map(i => inputArray[i]);
}
