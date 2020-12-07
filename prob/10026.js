'use strict';

const { DH_NOT_SUITABLE_GENERATOR } = require('constants');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n = 0;
let board = [];
let visitedRG = [];
let visitedNRG = [];
let cntRG = 0;
let cntNRG = 0;

const direction = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

const isValidPoint = (x, y, n) => {
	if (x >= 0 && y >= 0 && x < n && y < n) {
		return true;
	}
	return false;
};

const bfs = (start, isRG) => {
	const q = [start];
	const firstChr = board[start[0]][start[1]];
	while (q.length > 0) {
		const [currX, currY] = q.shift();
		for (const [a, b] of direction) {
			const [nx, ny] = [currX + a, currY + b];
			if (isValidPoint(nx, ny, n)) {
				// 적록 색약이면
				if (isRG) {
					if (!visitedRG[nx][ny]) {
						if (
							(firstChr === 'R' || firstChr === 'G') &&
							(board[nx][ny] === 'R' || board[nx][ny] === 'G')
						) {
							q.push([nx, ny]);
							visitedRG[nx][ny] = 1;
						} else if (firstChr === 'B' && board[nx][ny] === 'B') {
							q.push([nx, ny]);
							visitedRG[nx][ny] = 1;
						}
					}
				} else {
					if (!visitedNRG[nx][ny]) {
						// 색맹아닌경우
						// console.log(firstChr, board[nx][ny]);
						if (firstChr === board[nx][ny]) {
							// console.log('chk');
							q.push([nx, ny]);
							visitedNRG[nx][ny] = 1;
						}
					}
				}
			}
		}
	}
};

const solution = function (input) {
	n = parseInt(input.shift());
	board = input.map((row) => {
		return Array.from(row);
	});
	visitedRG = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => 0)
	);
	visitedNRG = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => 0)
	);
	cntRG = 0;
	cntNRG = 0;
	for (let row = 0; row < n; row++) {
		for (let col = 0; col < n; col++) {
			if (!visitedNRG[row][col]) {
				cntNRG++;
				// console.log(row, col);
				visitedNRG[row][col] = 1;
				bfs([row, col], false);
			}
			if (!visitedRG[row][col]) {
				cntRG++;
				visitedRG[row][col] = 1;
				bfs([row, col], true);
			}
		}
	}
	// console.log(visitedNRG);
	console.log(`${cntNRG} ${cntRG}`);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
