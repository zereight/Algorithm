const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const nums = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	let ans = 0;
	nums.forEach((num) => {
		ans = (ans + (num ** 2 % 10)) % 10;
	});
	console.log(ans);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
