'use strict';
var _ = require('lodash');
/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	if (typeof inputString !== 'string') {
		throw 'Invalid input';
	}
	if (inputString.length === 3) {
		return true;
	} else {
		return false;
	}
}

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	if(!_.isArray(a) || !_.isArray(b) || typeof a[0] === 'string' || typeof b[0] === 'string') {
		throw 'Invalid Input';
	}
	var combined = a.concat(b);
	return combined;
}

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	if (typeof noun != 'string') {
		throw 'Invalid Input';
	}
	var propNoun = noun.charAt(0);
	propNoun = propNoun.toUpperCase();
	propNoun += noun.substring(1).toLowerCase();
	return propNoun;
}

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	if (typeof inputString !== 'string') {
		throw 'Invalid Input';
	}
	var sorted = '';
	var temp = [];
	for (var i = 0; i < inputString.length; i++){
		temp.push(inputString[i]);
	}
	temp = temp.sort();
	sorted = temp.join('');
	return sorted;
}

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	if (typeof integer !== 'number') {
		throw 'Invalid Input';
	}
	var abs = 0;
	if (integer > 0) {
		abs = integer - 0;
	} else if (integer < 0) {
		abs = 0 - integer;
	}
	return abs;
}

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function myMin(a,b) {
 	if (typeof a !== 'number' || typeof b !== 'number' || arguments.length !== 2) {
 		throw 'Invalid Input';
 	}
 	if(a < b) {
 		return a;
 	} else if (b < a) {
 		return b;
 	}
 }

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
 function myMax(array) {
 	if (!_.isArray(array)) {
 		throw 'Invalid Input';
 	}
 	var big = 0;
 	for(var i = 0; i < array.length; i++){
 		if (array[i] > big) {
 			big = array[i];
 		}
 	}
 	return big;
 }

/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function getMonth(number){
 	if (typeof number !== 'number' || arguments.length !== 1 || number > 12 || number < 0) {
 		throw 'Invalid Input';
 	}
 	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 	return months[number - 1];
 }

/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
function randomElement(array){
	if (!_.isArray(array) || arguments.length !== 1) {
		throw 'Invalid Input';
	}
	var pick = Math.floor(Math.random() * array.length);
	return array[pick];
}
/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
function studentPairs(students){
	if (!_.isArray(students)) {
		throw 'Invalid Input';
	}
	var pairs = [];
	var runTime = Math.floor(Math.random() * students.length/2);
	for (var i = 0; i < runTime.length; i++) {
		var num1 = getRandomInt(0, students.length -1);
		var name1 = students.splice(num1, 1);

		var num2 = getRandomInt(0, students.length -1);
		var name2 = students.splice(num2, 1);
		pairs.push(name1.concat(name2));
	}

	if(students.length > 0) {
		var num = getRandomInt(0, pairs.length - 1);
		pairs[num].push(student[0]);
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) - min);
	}
}
/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(num){
	if (typeof num !== 'number') {
		throw 'Invalid Input';
	}
	var sum = 0;
	for (var i = 1; i <= num; i++) {
		sum += i * i;
	}
	return sum;
}
/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal (LARGEST!!!)  difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(array) {
	if (!_.isArray(array)) {
 		throw 'Invalid Input';
 	};
 	var bigDiff = 0;
 	for(var i = 0; i < array.length - 1; i++){
 		if (array[i] > array[i+1]) {
 			var temp = array[i] - array[i+1];
 		} else {
 			temp = array[i+1] - array[i];
 		}
 		if (temp > bigDiff) {
 			bigDiff = temp;
 		}
 	}
 	return bigDiff;
}
/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(string){
	if (typeof string !== 'string') {
		throw 'Invalid Input';
	}
	var arrayBlocks = [];
	var finishedArray = [];
	arrayBlocks = string.split(' ');
	console.log(arrayBlocks);
	for (var i = 0; i < arrayBlocks.length; i++) {
		var pieces = arrayBlocks[i].split('').join('-');
		finishedArray.push(pieces);
	}
	finishedArray = finishedArray.join(' ');
	console.log('test: ' + finishedArray);
	return finishedArray;
}
/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring(string, start, stop) {
	if (typeof string !== 'string' || typeof start !== 'number' || typeof stop !== 'number') {
		throw 'Invalid Input';
	}
	var newString = string.slice(start,stop+1);
	return newString;
}
/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};