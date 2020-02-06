var assert = require('assert');
var makeArrayConsecutive2 = require('./makeArrayConsecutive2').makeArrayConsecutive2;

describe('Make array consecutive.', function(){
    function testCondition(arr, elemsRequired) {
        it(`Array ${arr} will be consecutive with ${elemsRequired} more elements`, function() {
            assert.equal(makeArrayConsecutive2(arr), elemsRequired); 
        });
    }
    let testCases = [[[6, 2, 3, 8], 3], [[0, 3], 2], [[5, 4, 6], 0], [[6, 3], 2], [[1], 0]];
    testCases.forEach(element => testCondition(...element));
});
