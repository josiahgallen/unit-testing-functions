'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubString', function() {
	it('should exist', function() {
		expect(functions.mySubString).not.to.be.undefined;
	});
	it('should return a substring given a string, a start and a stop....("hello",1,3)',function(){
		expect(functions.mySubString('hello',1,3)).to.equal('ell');
	})
	it('should throw exception if input is blank', function(){
		expect(functions.mySubString()).to.throw('Invalid Input');
	})
	it('should throw exception if input is an array', function(){
		expect(functions.mySubString(['hello',1,3])).to.throw('Invalid Input');
	})
	it('should throw exception if input is a number', function(){
		expect(functions.mySubString(10)).to.throw('Invalid Input');
	})
	it('should throw exception if input is an object', function(){
		expect(functions.mySubString({one:1,ten:10, twenty:20})).to.throw('Invalid Input');
	})
});