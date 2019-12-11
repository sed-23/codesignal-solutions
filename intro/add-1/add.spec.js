var assert = require('assert');
var add = require('./add').add;

describe('add', function(){
    it('adds two parameters (1,2) and returns 3', function() {
        assert.equal(add(1,2), 3); 
    });

    it('adds two parameters (0,1000) and returns 1000', function() {
        assert.equal(add(0,1000), 1000); 
    });

    it('adds two parameters (2,-39) and returns -37', function() {
        assert.equal(add(2,-39), -37); 
    });

    it('adds two parameters (1,2) and returns 199', function() {
        assert.equal(add(99,100), 199); 
    });

    it('adds two parameters (1,2) and returns 0', function() {
        assert.equal(add(-100,100), 0); 
    });

    it('adds two parameters (-1000,-1000) and returns -2000', function() {
        assert.equal(add(-1000,-1000), -2000); 
    });
});