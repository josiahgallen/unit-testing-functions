'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return string "abc", if input is "cba"', function() {
		expect(functions.sortLetters('cba').to.equal('abc'));
	});
	it('should throw exception if input is "a321"', function() {
		expect(function(){functinos.sortLetters('a321')}).to.throw('Invalid Input');
	});
	it('should throw exception if input is 321', function() {
		expect(function(){functions.sortLetters(321)}).to.throw('Invalid Input');
	});
	it('should throw exceptionif input is an array', function(){
		expect(function(){functions.sortLetters(['cba'])}).to.throw('Invalid Input');
	})
});