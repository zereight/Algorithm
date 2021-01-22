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

const pq = new PriorityQueue();
pq.enqueue(12, 2);
pq.enqueue(11, 1);
pq.enqueue(1, 0);
console.log(pq.queue);
console.log(pq.dequeue());
