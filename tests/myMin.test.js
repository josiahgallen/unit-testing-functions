'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return the smaller argument, if input 1, 5 should return 1', function(){
		expect(functions.myMin(1,5)).to.equal(1);
	});
	it('should return the smaller argument, if input 5, 1 should return 1', function(){
		expect(functions.myMin(5,1)).to.equal(1);
	});
	it('should throw exception if input is left blank', function(){
		expect(function(){functions.myMin()}).to.throw('Invalid Input');
	})
	it('should throw exception if input only one argument', function(){
		expect(function(){functions.myMin(5)}).to.throw('Invalid Input');
	})
	it('should throw exception if input more than 2 arguements', function(){
		expect(function(){functions.myMin(5, 1, 7)}).to.throw('Invalid Input');
	})
	it('should throw exception if input is "5","1"', function(){
		expect(function(){functions.myMin('5','1')}).to.throw('Invalid Input');
	})
});