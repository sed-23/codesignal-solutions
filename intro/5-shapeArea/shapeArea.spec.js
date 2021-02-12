var assert = require('assert');
var shapeArea = require('./shapeArea').shapeArea;

describe('Area of the given shape.', function(){
    function testCondition(shape, area) {
        it(`Area of ${shape}-interesting polygon is ${area}`, function() {
            assert.equal(shapeArea(shape), area); 
        });
    }
    let testCases = [[2,5], [3, 13], [1, 1], [5, 41], [7000, 97986001], [8000, 127984001],
                        [9999, 199940005], [9998, 199900013], [8999,161946005]];
    testCases.forEach(element => testCondition(...element));
});
