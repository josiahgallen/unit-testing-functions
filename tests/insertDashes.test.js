'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return a string seperated by dashes, given a string',function(){
		expect(functions.insertDashes('oboe shoes fun')).to.equal('o-b-o-e s-h-o-e-s f-u-n');
	})
	it('should throw exception if input is blank', function(){
		expect(function(){functions.insertDashes()}).to.throw('Invalid Input');
	})
	it('should throw exception if input is an array', function(){
		expect(function(){functions.insertDashes(['hello world'])}).to.throw('Invalid Input');
	})
	it('should throw exception if input is a number', function(){
		expect(function(){functions.insertDashes(10)}).to.throw('Invalid Input');
	})
	it('should throw exception if input is an object', function(){
		expect(function(){functions.insertDashes({greeting:'hello world'})}).to.throw('Invalid Input');
	})
});