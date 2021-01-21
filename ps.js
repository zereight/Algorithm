/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let isNegative = false;
	let digitRange = 0;
	s = s.trim(' ');
	if (Array.from(s)[0] === '-') isNegative = true;
	Array.from(s).some((v, i) => {
		
		if(v === '-' || v === '+'){
			if(i!==0){
				return true;
			}
		}
		
		if ('0' <= v || v <= '9') {
			digitRange = i;
		} else {
			return true;
		}
		return false;
	});

	s = s.slice(0, digitRange + 1).trim('0');
	s = parseInt(s, 10);
	s = Math.max(-1 * 2 ** 31, s);
	s = Math.min(2 ** 31 - 1, s);
	return s ? s : 0;
};

console.log(myAtoi('words and 987'));
