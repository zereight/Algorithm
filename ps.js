const solution = (absolutes, signs) => {
	const answer = absolutes.reduce((acc, absolute, index) => {
		return acc + (signs[index] ? absolute : -absolute);
	}, 0)

	return answer;
}

console.log(solution(
	[4,7,12],
	[true,false,true]
));

