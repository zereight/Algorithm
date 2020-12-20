class Queue {
	constructor() {
		this.store = [];
	}
	enqueue(item) {
		this.store.push(item);
	}
	dequeue() {
		return this.store.shift();
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
