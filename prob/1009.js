const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const _ = parseInt(input.shift());
	let ans = '';
	for (row of input) {
		let [a, b] = row.split(' ').map((e) => parseInt(e));
		let res = a;
		b = (b % 4) + 4;
		for (let i = 2; i <= b; i++) {
			res = (res * a) % 10;
			res = res === 0 ? 10 : res;
		}
		ans += `${res}\n`;
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
