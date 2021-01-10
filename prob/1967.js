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

const dijkstra = (n, start, edges) => {
	const distance = Array.from({ length: n + 1 }, () => Infinity);
	const pq = new PriorityQueue();
	let maxCost = 0;
	let farestNode = start;

	distance[start] = 0;
	pq.enqueue(start, 0);

	while (!pq.isEmpty()) {
		const currPos = pq.dequeue().element;
		for (const [dest, cost] of edges[currPos]) {
			if (distance[dest] >= distance[currPos] + cost) {
				distance[dest] = distance[currPos] + cost;
				if (maxCost <= distance[dest]) {
					maxCost = distance[dest];
					farestNode = dest;
				}
				pq.enqueue(dest, distance[dest]);
			}
		}
	}

	return [maxCost, farestNode];
};

const solution = function (input) {
	const n = parseInt(input.shift());
	const edges = Array.from({ length: n + 1 }, () => []);
	for (const row of input) {
		const [a, b, c] = row.split(' ').map((e) => parseInt(e));
		edges[a].push([b, c]);
		edges[b].push([a, c]);
	}

	const farestNode = dijkstra(n, 1, edges)[1];
	console.log(dijkstra(n, farestNode, edges)[0]);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
