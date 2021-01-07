const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const board = [];
	for (row of input) {
		board.push(Array.from(row));
	}
	let cnt = 0;
	for (let i = 0; i < 8; i++) {
		for (let j = i % 2; j < 8; j += 2) {
			if (board[i][j] === 'F') {
				cnt++;
			}
		}
	}
	console.log(cnt);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
