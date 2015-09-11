'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return a substring given a string, a start and a stop... ("abcde",2,3) === ("cd")',function(){
		expect(functions.mySubstring('abcde', 2, 3)).to.equal('cd');
	});
	it('should throw exception if input is blank', function(){
		expect(function(){functions.mySubstring()}).to.throw('Invalid Input');
	});
	it('should throw exception if input is an array', function(){
		expect(function(){functions.mySubstring(['hello',1,3])}).to.throw('Invalid Input');
	});
	it('should throw exception if input is a number', function(){
		expect(function(){functions.mySubstring(10)}).to.throw('Invalid Input');
	});
	it('should throw exception if input is an object', function(){
		expect(function(){functions.mySubstring({one:1,ten:10, twenty:20})}).to.throw('Invalid Input');
	});
});

// it('should return a substring given a string, a start and a stop....("hello",1,3)',function(){
// 		expect(functions.mySubstring('hello',1,3)).to.equal('ell');
// 	});