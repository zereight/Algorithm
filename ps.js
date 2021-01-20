/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	for (const chr of Array.from(s)) {
		if (chr === '(' || chr === '[' || chr === '{') {
			stack.push(chr);
		} else if (chr === ')') {
			if (stack.pop() !== '(') return false;
		} else if (chr === ']') {
			if (stack.pop() !== '[') return false;
		} else if (chr === '}') {
			if (stack.pop() !== '{') return false;
		}
	}
	if (stack.length > 0) return false;
	return true;
};
