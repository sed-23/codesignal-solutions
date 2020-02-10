var assert = require('assert');
var almostIncreasingSequence = require('./almostIncreasingSequence').almostIncreasingSequence;

describe('Almost Increating Sequence.', function(){
    function testCondition(arr, almostIncSeq) {
        it(`This is${almostIncSeq ? '': ' not'} an almost Increasing Sequence.`, function() {
            assert.equal(almostIncreasingSequence(arr), almostIncSeq); 
        });
    }
    let testCases = [[[1, 3, 2, 1], false], [[1, 3, 2], true], [[1, 2, 1, 2], false],
                     [[3, 6, 5, 8, 10, 20, 15], false], [[1, 1, 2, 3, 4, 4], false]];
    testCases.forEach(element => testCondition(...element));
});
