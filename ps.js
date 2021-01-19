/**
 * @param {string[]} strs
 * @return {string}
 */

const findMinLength = (array) =>
	array.reduce((a, b) => (a.length < b.length ? a : b));

const isSameChrOfIndex = (index, strs) => {
	const pivot = strs[0][index];
	for (const str of strs.slice(1)) {
		if (str[index] !== pivot) return false;
	}
	return true;
};

var longestCommonPrefix = function (strs) {
    if(strs.length === 0) return '';
	const minLength = findMinLength(strs).length;
	let ans = '';
	let temp = '';
	for (let index = 0; index < minLength; index++) {
		if (!isSameChrOfIndex(index, strs)) {
            break;
			
		}
        temp += strs[0][index];
        ans = ans.length < temp.length ? temp : ans;
	}
	return ans;
};
