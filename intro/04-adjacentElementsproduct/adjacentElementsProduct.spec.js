var assert = require('assert');
var adjacentElementsProduct = require('./adjacentElementsProduct').adjacentElementsProduct;

describe('Greatest Product of the adjacent numbers from given array.', function(){
    function testCondition(inputArray, greatestProduct) {
        it(`Greatest Product of the adjacent numbers in the given array ${inputArray} is ${greatestProduct}`, function() {
            assert.equal(adjacentElementsProduct(inputArray), greatestProduct); 
        });
    }
    let testCases = [[[3, 6, -2, -5, 7, 3], 21], [[-1, -2], 2], [[5, 1, 2, 3, 1, 4], 6],
                       [[1, 2, 3, 0], 6], [[9, 5, 10, 2, 24, -1, -48], 50], [[5, 6, -4, 2, 3, 2, -23], 30],
                        [[4, 1, 2, 3, 1, 5], 6], [[-23, 4, -3, 8, -12], -12], [[1, 0, 1, 0, 1000], 0]];
    testCases.forEach(element => testCondition(...element));
});
