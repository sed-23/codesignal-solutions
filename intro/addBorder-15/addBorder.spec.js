var assert = require('assert');
var addBorder = require('./addBorder').addBorder;

describe('Add Border.', function(){
    function testCondition(inputArray, res) {
        it(`Given array with border is ${res}`, function() {
            assert.deepEqual(addBorder(inputArray), res); 
        });
    }
    let testCases = [[["abc", "ded"], ["*****", "*abc*", "*ded*", "*****"]], 
                    [["a"], ["***", "*a*", "***"]]];
    testCases.forEach(element => testCondition(...element));
});
