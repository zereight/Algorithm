class PQ {
	constructor(size) {
		this.node = 1;
		this.tree = new Array(size + 1).fill(0);
	}

	push(val) {
		const { tree } = this;
		if (this.node >= tree.length) {
			console.log('overflow');
			return;
		}

		tree[this.node] = val;
		this.node += 1;
		let child = this.node - 1;

		while (child > 1) {
			const parent = Math.floor(child / 2);
			if (tree[child] < tree[parent]) {
				// 정렬 기준
				const temp = tree[child];
				tree[child] = tree[parent];
				tree[parent] = temp;
			} else {
				break;
			}
			child = parent;
		}
	}

	isEmpty() {
		return this.node <= 1;
	}

	pop() {
		const { tree } = this;
		if (this.node <= 1) {
			// console.log('empty');
			return;
		}

		const popped = tree[1];
		tree[1] = tree[this.node - 1];
		this.node -= 1;
		let parent = 1;

		while (parent < this.node - 1) {
			let child = -1;
			if (parent * 2 >= this.node) {
				break;
			} else if (parent * 2 < this.node && parent * 2 + 1 >= this.node) {
				child = parent * 2;
			} else {
				if (tree[parent * 2] < tree[parent * 2 + 1]) {
					child = parent * 2;
				} else {
					child = parent * 2 + 1;
				}
			}

			if (tree[child] < tree[parent]) {
				const temp = tree[child];
				tree[child] = tree[parent];
				tree[parent] = temp;
				parent = child;
			} else {
				break;
			}
		}
		return popped;
	}
}
