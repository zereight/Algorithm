/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
	const numDict = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z'],
	};

	const ans = [];

	const dfs = (deepness, currStr) => {
		if (deepness === digits.length) return;
		for (const chr of numDict[Array.from(digits)[deepness]]) {
			if ((currStr + chr).length === digits.length) ans.push(currStr + chr);
			dfs(deepness + 1, currStr + chr);
		}
	};

	dfs(0,'');

	return ans;
};
