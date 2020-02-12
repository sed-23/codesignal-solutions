var assert = require('assert');
var allLongestStrings = require('./allLongestStrings').allLongestStrings;

describe('All Longest Strings', function(){
    function testCondition(inputArray, arr) {
        it(`Array with all longest strings is ${arr}`, function() {
            assert.deepEqual(allLongestStrings(inputArray), arr); 
        });
    }
    let testCases = [[["aba", "aa", "ad", "vcd", "aba"], ["aba", "vcd", "aba"]],
                     [['aa'], ['aa']], [["abc", "eeee", "abcd", "dcd"],
                     ["eeee", "abcd"]]];
    testCases.forEach(element => testCondition(...element));
});
