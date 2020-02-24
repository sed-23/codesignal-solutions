var assert = require('assert');
var areSimilar = require('./areSimilar').areSimilar;

describe('Are similar arrays?', function(){
    function testCondition(input, res) {
        it(`Given are ${res ? '' : 'not '}Similar arrays. `, function() {
            assert.equal(areSimilar(...input), res); 
        });
    }
    let testCases = [[[[1, 2, 3],[1, 2, 3]], true], [[[1, 2, 3],[2,1,3]], true], [[[1, 2, 2],[2, 1, 1]], false]];
    testCases.forEach(element => testCondition(...element));
});
