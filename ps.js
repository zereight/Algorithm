'use strict'

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = function (input) {
    const s = parseInt(input[0]);
    let curr = 1;
    let sum = curr;
    while (sum <= s) {
        curr++;
        sum += curr;
    }
    console.log(curr - 1);

};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});
