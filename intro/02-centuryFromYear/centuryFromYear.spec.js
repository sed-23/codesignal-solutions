var assert = require('assert');
var centuryFromYear = require('./centuryFromYear').centuryFromYear;

describe('Century from given year.', function(){
    function testCondition(year, century) {
        it(`Century of ${year} is ${century}`, function() {
            assert.equal(centuryFromYear(year), century); 
        });
    }
    let testCases = [[1905, 20], [1700, 17], [1988, 20], [2000, 20], [2001, 21], [200, 2],
                        [374, 4], [45, 1], [8,1]];
    testCases.forEach(element => testCondition(...element));
});
