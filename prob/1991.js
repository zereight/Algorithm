const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const traversal = (root, tree, flag = 1) => {
	let res = root;
	const [left, right] = tree[root];
	const leftRes = left === '.' ? '' : traversal(left, tree, flag);
	const rightRes = right === '.' ? '' : traversal(right, tree, flag);
	switch (flag) {
		case 1:
			return res + leftRes + rightRes; // preorder
		case 2:
			return leftRes + res + rightRes; // inorder
		case 3:
			return leftRes + rightRes + res; // postorder
	}
};

const solution = function (input) {
	const n = parseInt(input.shift());
	const tree = {};
	for (let i = 0; i < n; i++) {
		tree[String.fromCharCode('A'.charCodeAt(0) + i)] = [];
	}
	for (const row of input) {
		const [node, left, right] = row.split(' ');
		tree[node].push(left);
		tree[node].push(right);
	}
	let ans = '';
	for (let i = 1; i < 4; i++) {
		ans += traversal('A', tree, i) + '\n';
	}
	console.log(ans.trim('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
