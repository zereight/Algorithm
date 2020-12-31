const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	let ans = 0;
	let currStatus = 0;
	for (row of input) {
		const [a, b] = row.split(' ').map((e) => parseInt(e));
		currStatus = currStatus - a + b;
		ans = Math.max(ans, currStatus);
	}
	console.log(ans);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
