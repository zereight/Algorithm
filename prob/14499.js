const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const dice = {
	앞: 0,
	뒤: 0,
	상: 0,
	하: 0,
	좌: 0,
	우: 0,
};

const isValidPoint = (n, m, x, y) => {
	if (x >= 0 && y >= 0 && x < n && y < m) {
		return true;
	}
	return false;
};

const rotateDice = (direction, x, y, n, m) => {
	// 동쪽 1, 서쪽 2, 북쪽 3, 남쪽 4
	let isMoved = false;
	switch (direction) {
		case 1:
			if (!isValidPoint(n, m, x, y + 1)) break;
			[x, y] = [x, y + 1];
			[dice['좌'], dice['앞'], dice['우'], dice['뒤']] = [
				dice['뒤'],
				dice['좌'],
				dice['앞'],
				dice['우'],
			];
			isMoved = true;
			break;
		case 2:
			if (!isValidPoint(n, m, x, y - 1)) break;
			[x, y] = [x, y - 1];
			[dice['좌'], dice['앞'], dice['우'], dice['뒤']] = [
				dice['앞'],
				dice['우'],
				dice['뒤'],
				dice['좌'],
			];
			isMoved = true;
			break;
		case 3:
			if (!isValidPoint(n, m, x - 1, y)) break;
			[x, y] = [x - 1, y];
			[dice['상'], dice['앞'], dice['하'], dice['뒤']] = [
				dice['앞'],
				dice['하'],
				dice['뒤'],
				dice['상'],
			];
			isMoved = true;
			break;
		case 4:
			if (!isValidPoint(n, m, x + 1, y)) break;
			[x, y] = [x + 1, y];
			[dice['상'], dice['앞'], dice['하'], dice['뒤']] = [
				dice['뒤'],
				dice['상'],
				dice['앞'],
				dice['하'],
			];
			isMoved = true;
			break;
	}
	return [x, y, isMoved];
};

const solution = function (input) {
	let [n, m, x, y, k] = input
		.shift()
		.split(' ')
		.map((e) => parseInt(e));
	let board = [];
	let orders = input
		.pop()
		.split(' ')
		.map((e) => parseInt(e));
	for (const row of input) {
		board.push(row.split(' ').map((e) => parseInt(e)));
	}
	let isMoved = false;
	let ans = '';
	for (const order of orders) {
		[x, y, isMoved] = rotateDice(order, x, y, n, m);
		if (!isMoved) continue;
		if (board[x][y] === 0) {
			board[x][y] = dice['뒤'];
		} else {
			dice['뒤'] = board[x][y];
			board[x][y] = 0;
		}
		// console.log(dice);
		ans += `${dice['앞']}\n`;
	}
	console.log(ans.trim('\n'));
};

const input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
