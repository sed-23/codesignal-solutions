var assert = require('assert');
var avoidObstacles = require('./avoidObstacles').avoidObstacles;

describe('How many Moves?', function(){
    function testCondition(input, res) {
        it(`Moves needed are ${res ? '' : 'not '} `, function() {
            console.log(res)
            assert.equal(avoidObstacles(input), res);
        });
    }
    let testCases = [[[5, 3, 6, 7, 9],4], [[2, 3],4], [[1, 4, 10, 6, 2],7]];
    testCases.forEach(element => testCondition(...element));
});
