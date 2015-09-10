'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should return "January" if input is 1', function(){
		expect(functions.getMonth(1)).to.equal('January');
	});
	it('should return "July" if input is 7', function(){
		expect(functions.getMonth(7)).to.equal('July');
	});
	it('should return "December" if input is 12', function(){
		expect(functions.getMonth(12)).to.equal('December');
	});
	it('should throw exception if input is "a"', function(){
		expect(function(){functions.getMonth('a')}).to.throw('Invalid Input');
	});
	it('should throw exception if input is blank', function(){
		expect(function(){functions.getMonth()}).to.throw('Invalid Input');
	});
	it('should throw exception if input is [1]', function(){
		expect(function(){functions.getMonth([1])}).to.throw('Invalid Input');
	});
	it('should throw exception if input is more than one argument', function(){
		expect(function(){functions.getMonth(1,10)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is lower than 0', function(){
		expect(function(){functions.getMonth(-1)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is greater than 12', function(){
		expect(function(){functions.getMonth(13)}).to.throw('Invalid Input');
	});

});