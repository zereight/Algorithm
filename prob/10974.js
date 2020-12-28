const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

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
	const arr = Array.from({ length: n }).map((e, idx) => idx + 1);
	const allPerms = permutator(arr);
	let ans = '';
	allPerms.sort();
	for (const perm of allPerms) {
		ans += perm.join(' ') + '\n';
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
