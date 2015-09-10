'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should array when array is input', function(){
		expect(functions.studentPairs([])).to.equal([]);
	});
	it('should return an array of arrays of names ["joe","laura","amy", "jason"]', function(){
		expect(functions.studentPairs(['joe','laura','amy','jason'])).to.deep.equal([['joe','amy'],['jason','laura']]);
	});
	it('should throw exception if input is number and not array', function(){
		expect(function(){functions.studentPairs(1)}).to.throw('Invalid Input')
	});
	it('should throw exception if input is string and not array', function(){
		expect(function(){functions.studentPairs('joe')}).to.throw('Invalid Input')
	});
	it('should throw exception if is blank', function(){
		expect(function(){functions.studentPairs()}).to.throw('Invalid Input')
	});
	it('should throw exception if input is object and not array', function(){
		expect(function(){functions.studentPairs({name1:'joe',name2:'jason'})}).to.throw('Invalid Input')
	});
});