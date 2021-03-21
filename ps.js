const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = Number(input.shift());
	const boxSize = input.shift().split(' ').map(Number);
	const dp = Array.from({ length: n }, () => 1);

	boxSize.forEach((box, index) => {
		if (index === 0) return;

		for (let i = 0; i < index; i++) {
			if (boxSize[i] < boxSize[index] && dp[index] < dp[i] + 1) {
				dp[index] = dp[i] + 1;
			}
		}
	});

	console.log(dp.reduce((a, b) => Math.max(a, b)));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
