var assert = require('assert');
var areSimilar = require('./arrayChange').arrayChange;

describe('How many Moves?', function(){
    function testCondition(input, res) {
        it(`Moves needed are ${res ? '' : 'not '} `, function() {
            console.log(res)
            assert.equal(areSimilar(input), res);
        });
    }
    let testCases = [[[1, 1, 1],3], [[3122, -645, 2616, 13213, -8069],25559], [[2, 1, 10, 1],12]];
    testCases.forEach(element => testCondition(...element));
});
