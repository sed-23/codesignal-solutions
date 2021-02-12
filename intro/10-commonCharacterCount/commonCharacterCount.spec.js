var assert = require('assert');
var commonCharacterCount = require('./commonCharacterCount').commonCharacterCount;

describe('Common Character Count.', function(){
    function testCondition(inputArray, res) {
        it(`Common Character count is ${res}`, function() {
            assert.deepEqual(commonCharacterCount(...inputArray), res); 
        });
    }
    let testCases = [[["aabcc", "adcaa"], 3], [["zzzz", "zzzzzzz"], 4], [["abca", "xyzbac"], 3]];
    testCases.forEach(element => testCondition(...element));
});
