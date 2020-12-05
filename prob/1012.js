'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = function (input) {
    const T = parseInt(input.shift());
    let [m, n, k] = [-1, -1, -1];
    let visited = [];
    let farm = [];
    let points = [];
    let ans = '';
    let cnt = 0;
    const direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const isValidPoint = (x, y) => {
        if (x >= 0 && y >= 0 && x < m && y < n) {
            return true;
        }
        return false;
    };

    const dfs = (x, y) => {
        for (const [a, b] of direction) {
            const [nx, ny] = [x + a, y + b];
            if (isValidPoint(nx, ny)) {
                if (visited[nx][ny] === 0 && farm[nx][ny] === 1) {
                    // console.log(x,y,nx,ny);
                    visited[nx][ny] = 1;
                    dfs(nx, ny);
                }
            }
        }
    };

    for (let _T = 0; _T < T; _T++) {
        [m, n, k] = input
            .shift()
            .split(' ')
            .map((elem) => parseInt(elem));
        cnt = 0;
        visited = Array.from(Array(m), () => Array(n).fill(0));
        farm = Array.from(Array(m), () => Array(n).fill(0));
        points = input.splice(0, k).map((point) => {
            const [x, y] = point.split(' ').map((p) => parseInt(p));
            farm[x][y] = 1;
            return [x, y];
        });
        while (points.length > 0) {
            const [x, y] = points.shift();
            // console.log(visited)
            if (visited[x][y] === 0) {
                // console.log(x,y);
                cnt++;
                visited[x][y] = 1;
                dfs(x, y);
            }
        }
        ans += `${cnt}\n`;
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
