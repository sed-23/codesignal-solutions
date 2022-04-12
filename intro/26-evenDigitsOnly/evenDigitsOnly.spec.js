var assert = require('assert');
var evenDigitsOnly = require('./evenDigitsOnly').evenDigitsOnly;

describe('Even Digits Only.', function(){
    function testCondition(inputArray, res) {
        it(`Even Digits arr is ${res}`, function() {
            assert.deepEqual(arrayReplace(n), res); 
        });
    }
    let testCases = [
                    [
                        [248622],
                        [true]
                    ], 
                    [
                        [[1, 2, 1, 2, 1], 2, 2],
                        [1, 2, 1, 2, 1]
                    ],
                    [
                        [[2, 1], 3, 9],
                        [2, 1]
                    ],
                ];
    testCases.forEach(element => testCondition(...element));
});
