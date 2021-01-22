/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let ans = '';
	// dp[a][b] : s의 a~b까지는 펠린드롬인가?
	const dp = Array.from({ length: s.length+1 }, () =>
		Array.from({ length: s.length+1 }, () => false)
	);

	// i부터 i까지는 1자리 아므로 항상 펠린드롬이다.
	for (let i = 0; i < s.length; i++) {
		dp[i][i] = true;
		ans = s[i];
	}

	// i부터 i+1까지는 2자리이므로 2자리가 같은경우 팰린드롬이다.
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) dp[i][i + 1] = true;
		if (dp[i][i + 1]) ans = s.slice(i, i + 2);
	}

	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 2; j < s.length; j++) {
			// 양끝이 같고, 안쪽의 문자열이 펠린드롬이면 지금 문자열도 펠린드롬!
			dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
			if (dp[i][j]) {
				ans = ans.length < (j - i + 1) ? s.slice(i, j + 1) : ans;
			}
		}
	}
	
	return ans;
};
