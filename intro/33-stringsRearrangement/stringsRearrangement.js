

/* Q: Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. 
        Return true if it's possible, and false if not. */

// URL : https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

function stringsRearrangement(num) {
    const foo = (d, inputArray) => {
        if (d === inputArray.length) {
            for (let i = 0; i < inputArray.length - 1; i++) {
                let c = 0;
                for (let j = 0; j < inputArray[i].length; j++) {
                    if (inputArray[i][j] !== inputArray[i + 1][j]) c++;
                }
                if (c !== 1) return false;
            }
            return true;
        }
        for (let i = d; i < inputArray.length; i++) {
            [inputArray[d], inputArray[i]] = [inputArray[i], inputArray[d]];
            if (foo(d + 1, inputArray)) return true;
            [inputArray[d], inputArray[i]] = [inputArray[i], inputArray[d]];
        }
        return false;
    };
    return foo(0, inputArray);
}


exports.stringsRearrangement = stringsRearrangement;