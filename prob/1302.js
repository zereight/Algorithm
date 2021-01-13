const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = function (input) {
	const n = parseInt(input.shift());
	const infomation = {};
	for (const row of input) {
		if (infomation[row]) {
			infomation[row]++;
		} else {
			infomation[row] = 1;
		}
	}
	const items = Object.keys(infomation).map((key) => [key, infomation[key]]);
	items.sort((a, b) => {
		if (a[1] > b[1]) return -1;
		if (a[1] < b[1]) return 1;

		if (a[0] > b[0]) return 1;
		if (a[0] < b[0]) return -1;
	});

	console.log(items[0][0]);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
