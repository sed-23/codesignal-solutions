/* Question : Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-forest-edge/mCkmbxdMsMTjBc3Bm


function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i=> i==elemToReplace ? substitutionElem : i)
}
