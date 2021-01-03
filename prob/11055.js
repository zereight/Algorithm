const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const numbers = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	numbers.unshift(0);
	// dp[1] => arr 1번째까지의 증가 부분 수열중에 합이 가장 큰 수
	const dp = Array.from({ length: n + 1 }, () => 0).map((_, i) => numbers[i]);
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j < i; j++) {
			if (numbers[j] < numbers[i]) {
				// 증가수열인가?
				dp[i] = Math.max(dp[i], dp[j] + numbers[i]);
			}
		}
	}

	console.log(Math.max(...dp));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
