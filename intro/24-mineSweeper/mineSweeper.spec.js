var assert = require('assert');
var mineSweeper = require('./mineSweeper').mineSweeper;

describe('Box Blur.', function(){
    function testCondition(inputArray, res) {
        it(`Given image to blur is ${res}`, function() {
            assert.deepEqual(mineSweeper(inputArray), res); 
        });
    }
    let testCases = [
                    [
                        [[true,false,false], 
                        [false,true,false], 
                        [false,false,false]],

                        [[1,2,1], 
                        [2,1,1], 
                        [1,1,1]]
                    ], 
                    [
                        [[false,false,false], 
                        [false,false,false]],

                        [[0,0,0], 
                        [0,0,0]]
                    ],
                    [
                        [[true,false], 
                        [true,false], 
                        [false,true], 
                        [false,false], 
                        [false,false]],

                        [[1,2], 
                        [2,3], 
                        [2,1], 
                        [1,1], 
                        [0,0]]
                    ],
                ];
    testCases.forEach(element => testCondition(...element));
});
