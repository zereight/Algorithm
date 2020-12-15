'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const allDistances = {};

const dijkstra = (n, start, graph) => {
	const distance = Array.from({ length: n + 1 }, () => Infinity);
	const q = [];
	distance[start] = 0;
	q.push([start, 0]);

	while (q.length>0) {
		const [curr, weight] = q.shift();
		for (const [dest, cost] of graph[curr]) {
				if (distance[dest] > weight + cost) {
                    distance[dest] = weight + cost;
					q.push([dest,distance[dest]]);
				}
		}
	}
	allDistances[start] = distance;
};

const solution = function (input) {
	const [n, m, x] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const graph = {};
	let answer = 0;
	for (let i = 1; i <= n; i++) {
		graph[i] = [];
	}
	for (const row of input) {
		const [a, b, c] = row.split(' ').map((e) => parseInt(e));
		graph[a].push([b, c]);
	}
	for (let start = 1; start <= n; start++) {
		dijkstra(n, start, graph);
	}
	for (let start = 1; start <= n; start++) {
		answer = Math.max(answer, allDistances[start][x] + allDistances[x][start]);
	}
	console.log(answer);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
