/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const limits = [-1 * 2 ** 31, 2 ** 31 - 1];
	let ans = parseInt(String(x).split('').reverse().join(''));
	ans = x > 0 ? ans : -ans;
	if (limits[0] > ans || limits[1] < ans) return 0;
	return ans;
};
