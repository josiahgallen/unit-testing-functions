'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return absolute value of -3', function() {
		expect(functions.absVal(-3)).to.equal(3);
	});
	it('should throw exception if input is "a"', function() {
		expect(function(){functions.absVal('a')}).to.throw('Invalid Input');
	});
	it('should throw exception if input is [-3]', function() {
		expect(function(){functions.absVal([-3])}).to.throw('Invalid Input');
	});
	it('should throw exception if input is left blank', function() {
		expect(function(){functions.absVal()}).to.throw('Invalid Input');
	});
});