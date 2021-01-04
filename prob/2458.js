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

	const upRelations = Array.from({ length: n + 1 }, () => []);
	const downRelations = Array.from({ length: n + 1 }, () => []);

	const upCnt = Array.from({ length: n + 1 }, () => 0); // 내 위에 몇명이 있는가?
	const downCnt = Array.from({ length: n + 1 }, () => 0); // 내 아래에 몇명이 있는가?

	let upVisited = Array.from({ length: n + 1 }, () => 0);
	let downVisited = Array.from({ length: n + 1 }, () => 0);

	for (const row of input) {
		const [a, b] = row.split(' ').map((e) => parseInt(e));
		upRelations[a].push(b);
		downRelations[b].push(a);
	}

	const cntUp = (cnt, num) => {
		upVisited[num] = 1;
		for (const dest of upRelations[num]) {
			if (upVisited[dest] === 1) continue;
			cnt++;
			cnt = cntUp(cnt, dest);
		}
		return cnt;
	};
	const cntDown = (cnt, num) => {
		downVisited[num] = 1;
		for (const dest of downRelations[num]) {
			if (downVisited[dest] === 1) continue;
			cnt++;
			cnt = cntDown(cnt, dest);
		}
		return cnt;
	};

	let ans = 0;

	for (let i = 1; i < n + 1; i++) {
		upVisited = Array.from({ length: n + 1 }, () => 0);
		downVisited = Array.from({ length: n + 1 }, () => 0);
		upCnt[i] = cntUp(
			0,
			i,
			Array.from({ length: n + 1 }, () => 0)
		);
		downCnt[i] = cntDown(
			0,
			i,
			Array.from({ length: n + 1 }, () => 0)
		);
		if (upCnt[i] + downCnt[i] === n - 1) ans++;
	}
	// console.log(upCnt);
	// console.log(downCnt);
	console.log(ans);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
