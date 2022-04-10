var assert = require('assert');
var arrayReplace = require('./arrayReplace').arrayReplace;

describe('Box Blur.', function(){
    function testCondition(inputArray, res) {
        it(`Given image to blur is ${res}`, function() {
            assert.deepEqual(arrayReplace(inputArray), res); 
        });
    }
    let testCases = [
                    [
                        [[1, 2, 1], 1, 3],
                        [3, 2, 3]
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
