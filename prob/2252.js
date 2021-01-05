const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const [n, m] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	const entry = Array.from({ length: n + 1 }, () => 0);
	const relations = Array.from({ length: n + 1 }, () => []);
	for (row of input) {
		const [a, b] = row.split(' ').map((e) => parseInt(e));
		entry[b]++;
		relations[a].push(b);
	}
	const ans = [];
	const q = [];
	// entry가 0인 노드를 찾는다.
	for (let i = 1; i <= n; i++) {
		if (entry[i] === 0) {
			q.push(i);
			entry[i] = -1;
		}
	}

	while (q.length > 0) {
		const currStudent = q.shift();
		ans.push(currStudent);

		for (other of relations[currStudent]) {
			entry[other]--;

			if (entry[other] === 0) {
				q.push(other);
				entry[other] = -1;
			}
		}
	}
	console.log(ans.join(' '));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
