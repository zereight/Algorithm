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

const findShortestCost = (N, E, edges, start, target) => {
	const distance = Array.from({ length: N + 1 }, () => Infinity);

	const pq = new PriorityQueue();
	distance[start] = 0;
	pq.enqueue(start, distance[start]);

	while (!pq.isEmpty()) {
		const qe = pq.dequeue();
		const currentVertex = qe.element;

		for (const edge of edges[currentVertex]) {
			const [nextVertex, nextCost] = edge;

			if (distance[nextVertex] >= distance[currentVertex] + nextCost) {
				distance[nextVertex] = distance[currentVertex] + nextCost;
				pq.enqueue(nextVertex, distance[nextVertex]);
			}
		}
	}
	// console.log(distance);
	return distance[target];
};

const solution = function (N, E, edges, v1, v2) {
	const ans = Math.min(
		findShortestCost(N, E, edges, 1, v1) +
			findShortestCost(N, E, edges, v1, v2) +
			findShortestCost(N, E, edges, v2, N),

		findShortestCost(N, E, edges, 1, v2) +
			findShortestCost(N, E, edges, v2, v1) +
			findShortestCost(N, E, edges, v1, N)
	);

	console.log(ans !== Infinity ? ans : -1);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const [N, E] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const [v1, v2] = input
		.pop()
		.split(' ')
		.map((e) => parseInt(e));
	const edges = Array.from({ length: N + 1 }, () => []);

	for (const row of input) {
		const [start, dest, cost] = row.split(' ').map((e) => parseInt(e));
		edges[start].push([dest, cost]);
		edges[dest].push([start, cost]);
	}
	solution(N, E, edges, v1, v2);
	process.exit();
});
