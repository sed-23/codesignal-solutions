
/* Q: Given array of integers, find the maximal possible sum of some of its k consecutive elements. */

// URL : https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5

function arrayMaxConsecutiveSum(inputArray, k) {
    let i = 0, highestSum = 0;
    while ( i + k <= inputArray.length) {
        let iterSum = 0, j = i;
        for(j; j < k+i; j++) {
            iterSum += inputArray[j]
        }
        highestSum = iterSum > highestSum ? iterSum : highestSum
        i += 1;
    }
    return highestSum;
}


exports.arrayMaxConsecutiveSum = arrayMaxConsecutiveSum;