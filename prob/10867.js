'use strict';

const readline = require('readline');
const { parse } = require('path');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const nums = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	console.log([...new Set(nums)].sort((a, b) => a - b).join(' '));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
