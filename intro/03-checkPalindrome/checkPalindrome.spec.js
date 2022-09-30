var assert = require('assert');
var checkPalindrome = require('./checkPalindrome').checkPalindrome;

describe('Check if the given string is Palindrome.', function(){
    function testCondition(inputString, result) {
        it(`${inputString} is a ${result ? '' : 'not a'} Palindrome`, function() {
            assert.equal(checkPalindrome(inputString), result); 
        });
    }
    let testCases = [['aabaa', true], ['abac', false], ['a', true], ['az', false],
                     ['abacaba', true], ['z', true], ['aaabaaaa', false], 
                     ['zzzazzazz', false], ['hlbeeykoqqqqokyeeblh', true], ['hlbeeykoqqqokyeeblh', true]];
    testCases.forEach(element => testCondition(...element));
});
