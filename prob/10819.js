const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getGap = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		sum += Math.abs(arr[i] - arr[i + 1]);
	}
	return sum;
};

function permutator(inputArr) {
	var results = [];

	function permute(arr, memo) {
		var cur,
			memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}

const solution = function (input) {
	const n = parseInt(input.shift());
	const arr = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	let ans = 0;
	for (const newArr of permutator(arr)) {
		const sum = getGap(newArr);
		ans = ans < sum ? sum : ans;
	}
	console.log(ans);
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
