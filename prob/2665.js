'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const board = [];
	const dp = []; // dp[x][y], x,y 최소로 검은방을 지나서 도달할 수 있는 값
	// const visited = [];
	for (const row of input) {
		board.push(Array.from(row).map((e) => parseInt(e)));
		dp.push(Array.from({ length: n }, () => Infinity));
		// visited.push(Array.from({ length: n }, () => 0));
	}
	const direction = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	// 시작지점 초기화
	const q = [[0, 0]];
	dp[0][0] = 0;

	while (q.length > 0) {
		const [x, y] = q.shift();
		// visited[x][y] = 1;
		for (const [a, b] of direction) {
			const [nx, ny] = [x + a, y + b];
			if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
				// 유효성 체크
				// if (!visited[nx][ny]) {
				if (board[nx][ny] === 1) {
					// 흰방이면 이전방의 값 이하일때 그대로 가져옴
					if (dp[nx][ny] > dp[x][y]) {
						dp[nx][ny] = dp[x][y];
						q.push([nx, ny]);
					}
				} else {
					// 검은방일때에는 +1해서(검은방을 부수어서) 도달하는 것이 더 작은 경우에만 +1하여 이동
					if (dp[nx][ny] > dp[x][y] + 1) {
						dp[nx][ny] = dp[x][y] + 1;
						q.push([nx, ny]);
					}
				}
				// }
			}
		}
	}
	console.log(dp[n - 1][n - 1]);
	// console.log(dp.join('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
