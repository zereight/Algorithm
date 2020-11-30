'use strict'

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const binarySearch = (array, target, start, end) => {
    let mid = -1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

const solution = function (input) {
    const n = parseInt(input[0]);
    const A = input[1].split(" ").map(e => parseInt(e));
    const m = parseInt(input[2]);
    const B = input[3].split(" ").map(e => parseInt(e));
    let ans = '';
    A.sort((a, b) => a - b);

    B.forEach(
        (elem, idx) => {
            if (binarySearch(A, elem, 0, n - 1) !== -1) {
                ans += idx === m - 1 ? '1' : "1\n";
            } else {
                ans += idx === m - 1 ? '0' : '0\n';
            }
        }
    );

    console.log(ans);
};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});
