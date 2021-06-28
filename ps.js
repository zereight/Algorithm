const sum = (arr) => arr.reduce((acc, curr)=> acc+curr, 0)

const solution = (numbers, target) => {
	let answer = 0;

	const dfs = (depth, arr) => {
		if(depth === numbers.length){
			if(sum(arr) === target){
				answer++;
			}
			return;
		}

		dfs(depth+1, [...arr, numbers[depth]]);
		dfs(depth+1, [...arr, -numbers[depth]]);
	}

	dfs(0, []);

	return answer;
}

console.log(solution([1,1,1,1,1],3));
console.log(solution([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],3));
