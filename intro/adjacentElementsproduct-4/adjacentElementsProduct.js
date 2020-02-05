/* Q: Given an array of integers, find the pair of adjacent elements that
     has the largest product and return that product. */

// URL : https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m/

function adjacentElementsProduct(inputArray) {
    let greatestProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i<inputArray.length-1;i++) {
        greatestProduct = Math.max(greatestProduct, inputArray[i] * inputArray[i+1]);
    }
    return greatestProduct
}

exports.adjacentElementsProduct = adjacentElementsProduct;
