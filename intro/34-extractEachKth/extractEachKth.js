/* Q: Given array of integers, remove each kth element from it. */

// URL : https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R

function extractEachKth(inputArray, k) {
    return inputArray.filter((a, i)=>(i+1)%k !== 0)
}


exports.extractEachKth = extractEachKth;