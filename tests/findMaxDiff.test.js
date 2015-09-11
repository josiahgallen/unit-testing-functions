'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return a number given an array of numbers [10,3,5,42]',function(){
		expect(functions.findMaxDiff([10,3,5,42])).to.equal(37);
	})
	it('should throw exception if input is a string', function(){
		expect(function(){functions.findMaxDiff('abc')}).to.throw('Invalid Input');
	})
	it('should throw exception if input is a number', function(){
		expect(function(){functions.findMaxDiff(10)}).to.throw('Invalid Input');
	})
	it('should throw exception if input is an object', function(){
		expect(function(){functions.findMaxDiff({one:1,ten:10, twenty:20})}).to.throw('Invalid Input');
	})
});