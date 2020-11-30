'use strict'

const readline = require("readline");
const {
    parse
} = require("path");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = function (input) {
    const [n, c] = input[0].split(" ").map(elem => parseInt(elem));
    const houses = input.slice(1).map(elem => parseInt(elem));
    houses.sort((a, b) => a - b);

    let minDist = houses[1] - houses[0];
    let maxDist = houses[houses.length - 1] - houses[0];

    let res = 0;

    while (minDist <= maxDist) {
        const mid = Math.floor((minDist + maxDist) / 2);
        let first = houses[0];
        let count = 1;

        for (let i = 1; i < houses.length; i++) {
            if (houses[i] >= first + mid) {
                count += 1;
                first = houses[i];
            }
        }

        if (count >= c) {
            minDist = mid + 1;
            res = mid;
        } else {
            maxDist = mid - 1;
        }
    }
    console.log(res);
};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});
