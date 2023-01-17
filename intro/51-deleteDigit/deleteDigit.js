/* Q: Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number. */

// URL : https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX



function deleteDigit(n) {
    let possibleNumbersSum = [], inp = n.toString()
    for(i=0; i<inp.length; i++) {
        arr = inp.split('')
        arr.splice(i, 1).join('')
        possibleNumbersSum.push(parseInt(arr.join('')));
    }
    return Math.max(...possibleNumbersSum);
}



exports.deleteDigit = deleteDigit;
