var assert = require('assert');
var matrixElementsSum = require('./matrixElementsSum').matrixElementsSum;

describe('Matrix Elements Sum.', function(){
    function testCondition(arr, matrixElemsSum) {
        it(`Matrix Elements Sum is ${matrixElemsSum}.`, function() {
            assert.equal(matrixElementsSum(arr), matrixElemsSum); 
        });
    }
    let testCases = [[[[0,1,1,2], [0,5,0,0], [2,0,3,3]], 9], [[[1,1,1,0], [0,5,0,1], [2,1,3,10]], 9],
                        [[[1,1,1], [2,2,2], [3,3,3]], 18]];
    testCases.forEach(element => testCondition(...element));
});
