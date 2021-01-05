const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getSum = (arr) => {
	let sum = 0;
	arr.forEach((e) => {
		sum += e;
	});
	return sum;
};

const solution = function (input) {
	let ans = '';
	ans += `${getSum(
		input
			.slice(0, 10)
			.map((e) => parseInt(e))
			.sort((a, b) => b - a)
			.slice(0, 3)
	)} `;
	ans += `${getSum(
		input
			.slice(10)
			.map((e) => parseInt(e))
			.sort((a, b) => b - a)
			.slice(0, 3)
	)}`;
	console.log(ans);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
