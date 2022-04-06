var assert = require('assert');
var boxBlur = require('./boxBlur').boxBlur;

describe('Box Blur.', function(){
    function testCondition(inputArray, res) {
        it(`Given image to blur is ${res}`, function() {
            assert.deepEqual(boxBlur(inputArray), res); 
        });
    }
    let testCases = [
                    [
                        [[1,1,1], 
                        [1,7,1], 
                        [1,1,1]], 
                        [[1]]
                    ], 
                    [
                        [[0,18,9], 
                        [27,9,0], 
                        [81,63,45]], 
                        [[28]]
                    ],
                    [
                        [[36,0,18,9], 
                        [27,54,9,0], 
                        [81,63,72,45]],
                        [[40,30]]
                    ],
                ];
    testCases.forEach(element => testCondition(...element));
});
