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

const dijkstra = (startPoint, items, edges, n, m) => {
	const distance = Array.from({ length: n + 1 }, () => Infinity);
	// const visited = Array.from({ length: n + 1 }, () => 0);
	const pq = new PriorityQueue();

	// visited[startPoint] = 0;
	distance[startPoint] = 0;
	pq.enqueue(startPoint, 0);

	while (!pq.isEmpty()) {
		const qElement = pq.dequeue();
		for (const edge of edges[qElement.element]) {
			const [d, w] = edge;
			// if (!visited[d]) {
			if (distance[qElement.element] + w < distance[d]) {
				distance[d] = distance[qElement.element] + w;
				pq.enqueue(d, distance[d]);
				// visited[d] = 1;
			}
			// }
		}
	}
	let itemCount = 0;
	for (let i = 1; i < n + 1; i++) {
		// 수색범위 안이면
		if (distance[i] <= m) {
			itemCount += items[i - 1];
		}
	}
	return itemCount;
};

const solution = function (input) {
	const [n, m, r] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const items = input
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

	let maxitems = 0;
	for (let startPoint = 1; startPoint < n + 1; startPoint++) {
		maxitems = Math.max(maxitems, dijkstra(startPoint, items, edges, n, m));
	}

	console.log(maxitems);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
