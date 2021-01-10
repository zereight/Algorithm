/*
import Dijkstra from "./utils/Dijkstra.js";
const dijkstra = new Dijkstra()

//dijkstra.addEdge("출발역", "도착역", 거리 또는 시간);
dijkstra.addEdge("V1", "V2", 2);
dijkstra.addEdge("V2", "V3", 2);
dijkstra.addEdge("V1", "V3", 100);

const result = dijkstra.findShortestPath("V1", "V3");
// result = ["V1", "V2", "V3"] 
*/
export default function Dijkstra() {
	const Node = {
		init: function (val, priority) {
			this.val = val;
			this.priority = priority;
		},
	};

	const PriorityQueue = {
		init: function () {
			this.values = [];
		},
		enqueue: function (val, priority) {
			const newNode = Object.create(Node);
			newNode.init(val, priority);

			this.values.push(newNode);

			let idxOfNewNode = this.values.length - 1;

			while (idxOfNewNode > 0) {
				const idxOfParentNode = Math.floor((idxOfNewNode - 1) / 2);

				const parentNode = this.values[idxOfParentNode];

				if (priority < parentNode.priority) {
					this.values[idxOfParentNode] = newNode;
					this.values[idxOfNewNode] = parentNode;
					idxOfNewNode = idxOfParentNode;
					continue;
				}
				break;
			}
			return this.values;
		},
		dequeue: function () {
			if (this.values.length == 0) {
				return;
			}
			const dequeued = this.values.shift();
			const lastItem = this.values.pop();
			if (!lastItem) {
				return dequeued;
			}
			this.values.unshift(lastItem);

			let idxOfTarget = 0;

			while (true) {
				let idxOfLeftChild = idxOfTarget * 2 + 1;
				let idxOfRightChild = idxOfTarget * 2 + 2;
				let leftChild = this.values[idxOfLeftChild];
				let rightChild = this.values[idxOfRightChild];

				function swap(direction) {
					const idxOfChild =
						direction == 'left' ? idxOfLeftChild : idxOfRightChild;
					const child = direction == 'left' ? leftChild : rightChild;
					this.values[idxOfChild] = this.values[idxOfTarget];
					this.values[idxOfTarget] = child;
					idxOfTarget = idxOfChild;
				}

				if (!leftChild) {
					return dequeued;
				}

				if (!rightChild) {
					if (leftChild.priority < lastItem.priority) {
						swap.call(this, 'left');
						continue;
					}
					return dequeued;
				}

				if (leftChild.priority == rightChild.priority) {
					swap.call(this, 'left');
					continue;
				}

				if (
					leftChild.priority < rightChild.priority &&
					leftChild.priority < lastItem.priority
				) {
					swap.call(this, 'left');
					continue;
				}

				if (
					rightChild.priority < leftChild.priority &&
					rightChild.priority < lastItem.priority
				) {
					swap.call(this, 'right');
					continue;
				}
			}
		},
	};

	const WeightedGraph = {
		init: function () {
			this.adjacencyList = {};
			this.length = 0;
		},
		addVertex: function (vertex) {
			if (!this.adjacencyList.hasOwnProperty(vertex)) {
				this.adjacencyList[vertex] = {};
				this.length++;
			}
		},
		addEdge: function (vertex1, vertex2, weight) {
			this.addVertex(vertex1);
			this.addVertex(vertex2);
			this.adjacencyList[vertex1][vertex2] = weight;
			this.adjacencyList[vertex2][vertex1] = weight;
			return this.adjacencyList;
		},
		removeEdge: function (vertex1, vertex2) {
			if (!this.adjacencyList.hasOwnProperty(vertex1)) {
				return `There's no ${vertex1}`;
			}
			if (!this.adjacencyList.hasOwnProperty(vertex2)) {
				return `There's no ${vertex2}`;
			}

			function removeHelper(v1, v2) {
				if (!this.adjacencyList.hasOwnProperty(v1)) {
					return `There's no edge between ${v1} and ${v2}`;
				}
				delete this.adjacencyList[v1][v2];
				if (Object.keys(this.adjacencyList[v1]).length == 0) {
					delete this.adjacencyList[v1];
				}
			}

			removeHelper.call(this, vertex1, vertex2);
			removeHelper.call(this, vertex2, vertex1);

			return this.adjacencyList;
		},
		removeVertex: function (vertex) {
			if (!this.adjacencyList.hasOwnProperty(vertex)) {
				return `There's no ${vertex}`;
			}
			const edges = this.adjacencyList[vertex];
			for (const key in edges) {
				this.removeEdge(key, vertex);
			}
			return this.adjacencyList;
		},
		findShortestRoute: function (start, end) {
			if (!start || !end) {
				return [];
			}
			const distance = {};
			const previous = {};
			const pq = Object.create(PriorityQueue);
			pq.init();
			pq.enqueue(start, 0);
			const visited = {};

			const hashOfVertex = this.adjacencyList;
			for (const vertexName in hashOfVertex) {
				const priority = vertexName == start ? 0 : Infinity;
				distance[vertexName] = priority;
				previous[vertexName] = null;
			}

			while (true) {
				let current = pq.dequeue();
				if (!current?.val) {
					return;
				}
				current = current.val;
				if (current == end) {
					break;
				}
				const neighbors = hashOfVertex[current];

				for (const vertexName in neighbors) {
					if (visited.hasOwnProperty(vertexName)) {
						continue;
					}
					const distFromStart = distance[current] + neighbors[vertexName];

					if (distFromStart < distance[vertexName]) {
						pq.enqueue(vertexName, distFromStart);
						distance[vertexName] = distFromStart;
						previous[vertexName] = current;
					}
				}
				visited[current] = true;
			}

			let node = end;

			const route = [];
			while (node) {
				route.unshift(node);
				node = previous[node];
			}

			return route;
		},
	};

	this.addEdge = (source, target, weight) => {
		WeightedGraph.addEdge(source, target, weight);
	};

	this.findShortestPath = (source, target) => {
		return WeightedGraph.findShortestRoute(source, target);
	};

	this.addVertex = (vertex) => {
		WeightedGraph.addVertex(vertex);
	};

	WeightedGraph.init();
}

/*const readline = require('readline');
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
 */
