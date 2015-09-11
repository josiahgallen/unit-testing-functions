'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true if the input is "abc"', function() {
		expect(functions.checkData('abc')).to.be.true;
	})
	it('should return false if the input is "abcd"', function() {
		expect(functions.checkData('abcd')).to.be.false;
	})
	it('should throw an exception if the input is an array', function() {
		expect(function() { functions.checkData(['a'])}).to.throw('Invalid input');
	})
	it('should throw an exception if input is a 123', function() {
		expect(function() {functions.checkData(123)}).to.throw('Invalid input');
	})
});