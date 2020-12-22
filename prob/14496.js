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

const dijkstra = (edges, startPoint, endPoint) => {
	const distance = Array.from({ length: 1001 }, () => Infinity);
	const pq = new PriorityQueue();

	distance[startPoint] = 0;
	pq.enqueue(startPoint, distance[startPoint]);

	while (!pq.isEmpty()) {
		const qElem = pq.dequeue();
		const currNode = qElem.element;
		if (currNode === endPoint) {
			return distance[currNode];
		}
		for (const dest of edges[currNode]) {
			if (distance[dest] > distance[currNode] + 1) {
				distance[dest] = distance[currNode] + 1;
				pq.enqueue(dest, distance[dest]);
			}
		}
	}
	return -1;
};

const solution = function (input) {
	const [startPoint, endPoint] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const [n, m] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const edges = {};
	for (let i = 0; i < 10001; i++) {
		edges[i] = [];
	}
	for (const row of input) {
		const [a, b] = row.split(' ').map((e) => parseInt(e));
		edges[a].push(b);
		edges[b].push(a);
	}

	console.log(dijkstra(edges, startPoint, endPoint));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
