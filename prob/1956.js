const readline = require('readline');
const { info } = require('console');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const [V, E] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const matrix = Array.from({ length: V + 1 }, () =>
		Array.from({ length: V + 1 }, () => Infinity)
	);

	for (const row of input) {
		const [a, b, c] = row.split(' ').map((e) => parseInt(e));
		matrix[a][b] = Math.min(matrix[a][b], c);
	}

	for (let k = 0; k < V + 1; k++) {
		for (let i = 0; i < V + 1; i++) {
			if (k === i) continue;
			for (let j = 0; j < V + 1; j++) {
				if (k === j) continue;
				if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
					matrix[i][j] = matrix[i][k] + matrix[k][j];
				}
			}
		}
	}

	let min = Infinity;
	for (let i = 0; i < V + 1; i++) {
		min = Math.min(min, matrix[i][i]);
	}
	console.log(min !== Infinity ? min : -1);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
