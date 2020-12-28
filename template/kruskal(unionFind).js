// 4386

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getDistance = (star1, star2) => {
	return parseFloat(
		Math.sqrt((star1[0] - star2[0]) ** 2 + (star1[1] - star2[1]) ** 2).toFixed(
			2
		)
	);
};

const findParent = (parent, x) => {
	if (parent[x] !== x) {
		parent[x] = findParent(parent, parent[x]);
	}
	return parent[x];
};

const unionFind = (parent, a, b) => {
	a = findParent(parent, a);
	b = findParent(parent, b);
	if (a < b) {
		parent[b] = a;
	} else {
		parent[a] = b;
	}
	return parent;
};

const kruskal = (n, edges) => {
	let parent = Array.from({ length: n }, () => 0).map((_, idx) => idx);
	let res = 0.0;
	edges.sort((a, b) => a[2] - b[2]);

	edges.forEach((edge) => {
		const [start, dest, cost] = edge;
		if (findParent(parent, start) !== findParent(parent, dest)) {
			parent = unionFind(parent, start, dest);
			res += cost;
		}
	});
	return res;
};

const solution = function (input) {
	const n = parseInt(input.shift());
	const vertexes = input.map((point) =>
		point.split(' ').map((e) => parseFloat(e) + 0.0)
	);
	const edges = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === j) continue;
			edges.push([i, j, getDistance(vertexes[i], vertexes[j])]);
		}
	}
	console.log(kruskal(n, edges));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
