var assert = require('assert');
var sortByHeight = require('./sortByHeight').sortByHeight;

describe('Sort By Height.', function(){
    function testCondition(input, res) {
        it(`${res} is sorted by height.`, function() {
            assert.deepEqual(sortByHeight(input), res); 
        });
    }
    let testCases = [[[-1, 150, 190, 170, -1, -1, 160, 180], [-1, 150, 160, 170, -1, -1, 180, 190]],
                      [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]], [[-1], [-1]]];
    testCases.forEach(element => testCondition(...element));
});