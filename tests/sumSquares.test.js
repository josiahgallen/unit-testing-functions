'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should return a sum of squares given an whole number',function(){
		expect(functions.sumSquares(5)).to.equal(45);
	});
	it ('should throw exception if non-integer 2.3 is entered', function(){
		expect(function(){functions.sumSquares(2.3)}).to.throw('Invalid input');
	})
	it ('should throw exception if input is blank', function(){
		expect(function(){functions.sumSquares()}).to.throw('Invalid input');
	})
	it ('should throw exception if input is string "abc"', function(){
		expect(function(){functions.sumSquares('abc')}).to.throw('Invalid input');
	});
});