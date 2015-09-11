'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should return 3 if input is [1,3,2]', function(){
		expect(functions.myMax([1,3,2])).to.equal(3);
	});
	it('should throw exception if input is 3', function(){
		expect(function(){functions.myMax(3)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is blank', function(){
		expect(function(){functions.myMax()}).to.throw('Invalid Input');
	});
	it('should throw exception if input is {one: 1, two: 2, two: 3}', function(){
		expect(function(){functions.myMax({one:1,two:2,three:3})}).to.throw('Invalid Input');
	})
});