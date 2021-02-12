var assert = require('assert');
var reverseInParentheses = require('./reverseInParentheses').reverseInParentheses;

describe('Reverse in Parentheses.', function(){
    function testCondition(input, res) {
        it(`${res} is reversed in parentheses.`, function() {
            assert.equal(reverseInParentheses(input), res); 
        });
    }
    let testCases = [["(bar)", "rab"], ["foo(bar)baz", "foorabbaz"], ["foo(bar)baz(blim)", "foorabbazmilb"]];
    testCases.forEach(element => testCondition(...element));
});