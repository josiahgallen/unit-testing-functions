'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should return string "John" when input is "john"',function() {
		expect(functions.fixProperNoun('john')).to.equal('John');
	});
	it('should throw error if input is 123',function() {
		expect(function(){functions.fixProperNoun(123)}).to.throw('Invalid Input');
	});
	it('should throw error if input is null',function() {
		expect(function(){functions.fixProperNoun(null)}).to.throw('Invalid Input');
	});
});