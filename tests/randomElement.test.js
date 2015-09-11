'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return one element from [1,2,3];', function(){
		expect(functions.randomElement([1,2,3])).to.equal(1);
	});
	it('should throw exception if input is number 1 and not an array', function(){
		expect(function(){functions.randomElement(1)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is number an object and not an array', function(){
		expect(function(){functions.randomElement({prop1: 1})}).to.throw('Invalid Input');
	});
	it('should throw exception if input is string "a" and not an array', function(){
		expect(function(){functions.randomElement('a')}).to.throw('Invalid Input');
	});
});