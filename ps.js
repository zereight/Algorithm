const bfs = (maps) => {

	const direction = [
		[-1,0],
		[1,0],
		[0,-1],
		[0,1]
	];

	const isValidPoint = (x,y) => {
		const row = maps.length;
		const col = maps[0].length;

		return 0<=x && x<row && 0<=y && y<col;
	}

	const visited = Array.from({length: maps.length}, (_, idx) => {
		return Array.from({length: maps[idx].length}, () => 0)
	});
	const dp = Array.from({length: maps.length}, (_, idx) => {
		return Array.from({length: maps[idx].length}, () => 0)
	});

	const startPoint = [0,0];
	const destPoint = [maps.length - 1, maps[0].length - 1]

	const q = [startPoint];

	visited[startPoint[0]][startPoint[1]] = 1;
	dp[startPoint[0]][startPoint[1]] = 1;

	while(q.length > 0){
		const [currX, currY] = q.shift();
		
		// if(destPoint[0] === currX && destPoint[1] === currY){
		// 	break;
		// }

		for(const [deltaX, deltaY] of direction) {
			const [nx, ny] = [currX + deltaX, currY + deltaY];

			if(!isValidPoint(nx,ny)) continue;
			if(maps[nx][ny] === 0) continue;
			if(visited[nx][ny]) continue;

			visited[nx][ny] = 1;
			dp[nx][ny] = dp[currX][currY] + 1;
			q.push([nx, ny]);
		};

		
	}

	return dp[destPoint[0]][destPoint[1]] > 0 ? dp[destPoint[0]][destPoint[1]] : -1;
}

const solution = (maps) => {
    return bfs(maps);
}


console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));
