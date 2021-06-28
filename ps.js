
const solution = (s) => {
	const stack = [];
	for(const chr of s){
		if(stack[stack.length - 1] === chr){
			stack.pop();
		}else{
			stack.push(chr);
		}
	}
	return stack.length > 0 ? 0 : 1;
}


console.log(solution("baabaa"));
console.log(solution("cdcd"));
console.log(solution("abcdeabcde".repeat(100000)));
