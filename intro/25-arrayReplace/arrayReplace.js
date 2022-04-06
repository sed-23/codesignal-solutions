/* Q:Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem. */

// URL : https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(var i = 0; i < inputArray.length; i++){
        if (inputArray[i] == elemToReplace)
            inputArray[i] = substitutionElem
    }
}

exports.arrayReplace = arrayReplace;
