'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should return combined array if input is [1],[2]', function () {
		expect(functions.concatenateArrays([1],[2])).to.deep.equal([1,2]);
	});
	it('should throw exception if input is [a],[b]', function () {
		expect(function() {functions.concatenateArrays(['a'],['b'])}).to.throw('Invalid Input');
	});
	it('should throw exception if input is [1]', function () {
		expect(function() {functions.concatenateArrays([1])}).to.throw('Invalid Input');
	});
	it('should throw exception if input is empty', function () {
		expect(function() {functions.concatenateArrays()}).to.throw('Invalid Input');
	});
	it('should throw exception if input is an object', function () {
		expect(function() {functions.concatenateArrays({prop:1})}).to.throw('Invalid Input');
	});
	it('should throw exception if input is 1,2', function () {
		expect(function() {functions.concatenateArrays(1,2)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is "a","b"', function () {
		expect(function() {functions.concatenateArrays('a','b')}).to.throw('Invalid Input');
	});

});