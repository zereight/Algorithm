'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const solve = (a, b, cnt) => `Case #${cnt}: ${a} + ${b} = ${a + b}\n`;
	let ans = '';
	let cnt = 1;
	for (const row of input) {
		const [a, b] = row.split(' ').map((e) => parseInt(e));
		ans += solve(a, b, cnt++);
	}
	console.log(ans.trim('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
