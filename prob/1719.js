'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

class QElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}
	enqueue(element, priority) {
		let isContain = false;
		const qElement = new QElement(element, priority);
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].priority > qElement.priority) {
				this.queue.splice(i, 0, qElement);
				isContain = true;
				break;
			}
		}
		if (!isContain) {
			this.queue.push(qElement);
		}
	}
	dequeue() {
		if (!this.isEmpty()) return this.queue.shift();
	}
	front() {
		if (!this.isEmpty()) return this.queue[0];
	}
	rear() {
		if (!this.isEmpty()) return this.queue[this.queue.length - 1];
	}
	isEmpty() {
		return this.queue.length === 0;
	}
}

const dijkstra = (startPoint, edges, n) => {
	const pq = new PriorityQueue();
	const distance = Array.from({ length: n + 1 }, () => Infinity);
	const firstPoint = Array.from({ length: n + 1 }, () => '-');
	const path = Array.from({ length: n + 1 }, () => 0);

	distance[startPoint] = 0;
	path[startPoint] = '-';
	pq.enqueue(startPoint, distance[startPoint]);

	while (!pq.isEmpty()) {
		const qElement = pq.dequeue();
		for (const edge of edges[qElement.element]) {
			const [d, w] = edge;
			if (distance[d] > distance[qElement.element] + w) {
				path[d] = qElement.element;
				distance[d] = distance[qElement.element] + w;
				pq.enqueue(d, distance[d]);
			}
		}
	}

	// 경로 추적하기
	const row = [];
	for (let i = 1; i <= n; i++) {
		if (startPoint === i) {
			// 출발점과 정점이 같으면 -
			row.push('-');
		} else if (path[i] === startPoint) {
			// 이전 지점이 출발지점이었으면 첫번째 지점은 지금 i
			row.push(i);
		} else {
			// 경로 추적, 이전역이 startPoint 일때까지 역추적
			let cur_node = i;
			while (1) {
				if (path[cur_node] === startPoint) {
					row.push(cur_node);
					break;
				}
				cur_node = path[cur_node];
			}
		}
	}
	return row;
};

const solution = function (input) {
	const [n, m] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const edges = {};
	for (let i = 1; i < n + 1; i++) {
		edges[i] = [];
	}
	for (const row of input) {
		const [a, b, c] = row.split(' ').map((e) => parseInt(e));
		edges[a].push([b, c]);
		edges[b].push([a, c]);
	}
	let answer = '';
	for (let i = 1; i < n + 1; i++) {
		answer += `${dijkstra(i, edges, n).join(' ')}\n`;
	}
	console.log(answer.trim('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
