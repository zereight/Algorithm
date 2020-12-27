const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getParent = (parents, target) => {
	if (parents[target] !== target) {
		parents[target] = getParent(parents, parents[target]);
	}
	return parents[target];
};

const unionFind = (parents, a, b) => {
	a = getParent(parents, a);
	b = getParent(parents, b);
	if (a < b) {
		parents[b] = a;
	} else {
		parents[a] = b;
	}
	return parents;
};

const getCycleNums = (n, edges) => {
	let parents = Array.from({ length: n + 1 }, () => 0).map((_, idx) => idx);
	for (const edge of edges) {
		const [start, dest] = edge;
		parents = unionFind(parents.slice(), start, dest);
	}
	return [...new Set(parents)].length - 1;
};

const solution = function (input) {
	let T = parseInt(input.shift());
	while (T--) {
		const n = parseInt(input.shift());
		const edges = input
			.shift()
			.split(' ')
			.map((e, idx) => [idx + 1, parseInt(e)]);
		console.log(getCycleNums(n, edges));
	}
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
