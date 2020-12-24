'use strict';

const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let dp = [];

const dfs = (n, forest, startPoint) => {
	const [sx, sy] = startPoint;
	if (dp[sx][sy]) {
		return dp[sx][sy];
	}

	for (const [x, y] of direction) {
		const [nx, ny] = [sx + x, sy + y];
		if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
			continue;
		}
		if (forest[nx][ny] < forest[sx][sy]) {
			continue;
		}

		dp[sx][sy] = Math.max(dp[sx][sy], dfs(n, forest, [nx, ny]) + 1)
	}
	return dp[sx][sy];
};

const solution = function (input) {
	const n = parseInt(input.shift());
	const forest = [];

	dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
	for (const row of input) {
		forest.push(row.split(' ').map((e) => parseInt(e)));
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			dp[i][j] = Math.max(dp[i][j], dfs(n, forest, [i, j]));
		}
	}
	let ans = 1;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			ans = Math.max(ans, dp[i][j]);
		}
	}
	// console.log(dp)
	console.log(ans + 1);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
