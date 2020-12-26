'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const problems = input.map((e, idx) => [idx + 1, parseInt(e)]);
	problems.sort((a, b) => a[1] - b[1]);
	const indexes = [];
	let sum = 0;
	problems.slice(3).forEach((e) => {
		indexes.push(e[0]);
		sum += e[1];
	});
	console.log(sum);
	console.log(indexes.sort((a, b) => a - b).join(' '));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
