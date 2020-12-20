/*const pq = Object.create(PriorityQueue);
pq.init();
pq.enqueue(start, 0); */

export const PriorityQueue = {
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
