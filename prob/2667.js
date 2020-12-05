'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const direction = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	]; // 상하좌우
	const visited = [];
	const housePoint = [];
	const board = input.map((string, rowIdx) => {
		const row = Array.from(string).map((str) => parseInt(str));
		row.forEach((elem, colIdx) => {
			if (elem === 1) {
				housePoint.push([rowIdx, colIdx]);
			}
		});
		visited.push(new Array(n + 1).fill(0));
		return row;
	});

	const checkValidPoint = (x, y) => {
		if ((x >= 0) & (y >= 0) && x < n && y < n) {
			return true;
		}
		return false;
	};

	const dfs = (x, y) => {
		for (const [a, b] of direction) {
			if (checkValidPoint(x + a, y + b) && !visited[x + a][y + b]) {
				if (board[x + a][y + b] === 1) {
					visited[x + a][y + b] = 1;
					cnt++;
					dfs(x + a, y + b);
				}
			}
		}
	};

	const ans = [];
	let cnt = 0;

	while (housePoint.length > 0) {
		const [x, y] = housePoint.shift();
		cnt = 0;
		if (!visited[x][y]) {
            visited[x][y] = 1;
            cnt++;
			dfs(x, y);
		}
		if (cnt > 0) ans.push(cnt);
	}
	ans.sort((a, b) => a - b);
	console.log(ans.length);
	if (ans.length > 0) {
		console.log(ans.join('\n'));
	}
};
const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
