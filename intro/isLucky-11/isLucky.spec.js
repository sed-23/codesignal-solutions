var assert = require('assert');
var isLucky = require('./isLucky').isLucky;

describe('Common Character Count.', function(){
    function testCondition(input, res) {
        it(`${input} is ${res ? 'not ' : ''}Lucky`, function() {
            assert.deepEqual(isLucky(input), res); 
        });
    }
    let testCases = [[1230, true], [239017, false], [134008, true]];
    testCases.forEach(element => testCondition(...element));
});