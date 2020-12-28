'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getSumOfNums = (str) => {
	let sum = 0;
	for (const chr of Array.from(str)) {
		if ('0' <= chr && chr <= '9') {
			sum += parseInt(chr);
		}
	}
	return sum;
};

const compare = (a, b) => {
	if (a.length < b.length) {
		return -1;
	} else if (a.length > b.length) {
		return 1;
	}

	if (getSumOfNums(a) < getSumOfNums(b)) {
		return -1;
	} else if (getSumOfNums(a) > getSumOfNums(b)) {
		return 1;
	}

	if (a < b) return -1;
	else if (a == b) return 0;
	else return 1;
};

const solution = function (input) {
	const n = parseInt(input.shift());
	input.sort((a, b) => compare(a, b));
	console.log(input.join('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
