var assert = require('assert');
var alternatingSums = require('./alternatingSums').alternatingSums;

describe('Alternating Sums.', function(){
    function testCondition(input, res) {
        it(`Alternating sum of ${input} is ${res}`, function() {
            assert.deepEqual(alternatingSums(input), res); 
        });
    }
    let testCases = [[[50, 60, 60, 45, 70],[180, 105]], [[100, 50], [100, 50]], [[80], [80, 0]]];
    testCases.forEach(element => testCondition(...element));
});
