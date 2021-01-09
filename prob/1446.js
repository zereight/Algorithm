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

const solution = function (input) {
	const [N, D] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	//dp[i] ikm까지 이동시에 걸리는 최소 시간
	const dp = Array.from({ length: D + 1 }, () => Infinity);
	const edges = Array.from({ length: D + 1 }, () => []);
	for (const row of input) {
		const [a, b, c] = row.split(' ').map((e) => parseInt(e));
		if (D < b) continue;
		if (b - a <= c) continue;
		edges[a].push([b, c]);
	}
	const pq = new PriorityQueue();

	dp[0] = 0;
	for (let start = 0; start <= D; start++) {
		if (start > 0) {
			dp[start] = Math.min(dp[start], dp[start - 1] + 1);
		}

		pq.enqueue(start, dp[start]);
		while (!pq.isEmpty()) {
			const qe = pq.dequeue();
			const currPos = qe.element;

			for (const [nextPos, nextDist] of edges[currPos]) {
				if (dp[nextPos] > dp[currPos] + nextDist) {
					dp[nextPos] = dp[currPos] + nextDist;
					pq.enqueue(nextPos, dp[nextPos]);
				}
			}
		}
	}
	console.log(dp[D]);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
