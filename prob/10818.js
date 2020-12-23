'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const findMax = (array) => array.reduce((a, b) => Math.max(a, b));
const findMin = (array) => array.reduce((a, b) => Math.min(a, b));

const solution = function (input) {
	const n = parseInt(input.shift());
	const nums = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	console.log(findMin(nums), findMax(nums));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
