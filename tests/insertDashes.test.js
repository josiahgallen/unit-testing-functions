'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return a string seperated by dashes, given a string',function(){
		expect(functions.insertDashes('hello world')).to.equal('h-e-l-l-o w-o-r-l-d');
	})
	it('should throw exception if input is blank', function(){
		expect(functions.insertDashes()).to.throw('Invalid Input');
	})
	it('should throw exception if input is an array', function(){
		expect(functions.insertDashes(['hello world'])).to.throw('Invalid Input');
	})
	it('should throw exception if input is a number', function(){
		expect(functions.insertDashes(10)).to.throw('Invalid Input');
	})
	it('should throw exception if input is an object', function(){
		expect(functions.insertDashes({greeting:'hello world'})).to.throw('Invalid Input');
	})
});