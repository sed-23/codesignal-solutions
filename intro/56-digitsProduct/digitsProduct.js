/* Q: Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead. */

// URL : https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA

function digitsProduct(product) {
    for(var i = 1; i <= 3999; i++){  
        let smallestNum = i.toString().split('').reduce((a,b) => a*Number(b), 1); 
        if(smallestNum === product) return i;
    }
    return -1;
}



exports.digitsProduct = digitsProduct;
