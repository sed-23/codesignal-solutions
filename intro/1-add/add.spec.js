var assert = require('assert');
var add = require('./add').add;

describe('add', function(){
    function testCondition(param1, param2, sum) {
        it(`adds two parameters ${param1},${param2} and returns ${sum}`, function() {
            assert.equal(add(param1,param2), sum); 
        });
    }
    let testCases = [[1,2,3], [0,1000,1000], [2,-39,-37], [99,100,199], [-100,100,0], [-1000,-1000,-2000]];
    testCases.forEach(element => testCondition(...element));
});
