/* Q: Given an array of integers, find the maximal absolute difference between any two of
      its adjacent elements.*/

// URL : https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function arrayMaximalAdjacentDifference(inputArray) {
    return Math.max(...inputArray.slice(1).map((x,i)=>Math.abs(x-inputArray[i])))
}

exports.arrayMaximalAdjacentDifference = arrayMaximalAdjacentDifference;
