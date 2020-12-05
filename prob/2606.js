'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const m = parseInt(input.shift());
	const graph = [...new Array(n + 1)].map(() => []);
	const visited = [...new Array(n + 1)].fill(0);
	let cnt = 0;

	for (const edge of input) {
		const [start, dest] = edge.split(' ').map((elem) => parseInt(elem));
		graph[start].push(dest);
		graph[dest].push(start);
	}
	visited[1] = 1;

	const dfs = (start) => {
		for (const dest of graph[start]) {
			if (!visited[dest]) {
				visited[dest] = 1;
				cnt++;
				dfs(dest);
			}
		}
	};

	dfs(1);
	console.log(cnt);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
