const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const toss = (N, L, ballCount, currPos) => {
	if (ballCount[currPos] % 2 === 1) {
		return (currPos + L) % N;
	}
	return (currPos - L + N) % N;
};

const solution = function (input) {
	const [N, M, L] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));

	const ballCount = Array.from({ length: N }, () => 0);
	let currPos = 0;
	let cnt = 0;

	while (1) {
		ballCount[currPos]++;
		cnt++;
		if (ballCount[currPos] === M) break;
		currPos = toss(N, L, ballCount, currPos);
	}
	console.log(cnt - 1);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
