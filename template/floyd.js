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

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const edgeMatrix = [];
	const resultMatrix = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => Infinity)
	);
	for (const row of input) {
		edgeMatrix.push(row.split(' ').map((e) => parseInt(e)));
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (edgeMatrix[i][j] === 0) continue;
			resultMatrix[i][j] = edgeMatrix[i][j];
		}
	}

	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (resultMatrix[i][j] > resultMatrix[i][k] + resultMatrix[k][j]) {
					resultMatrix[i][j] = resultMatrix[i][k] + resultMatrix[k][j];
				}
			}
		}
	}
	let ans = '';
	for (const row of resultMatrix) {
		ans += `${row
			.map((e) => {
				return e === Infinity ? 0 : 1;
			})
			.join(' ')}\n`;
	}
	console.log(ans.trim('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
