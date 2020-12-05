'use strict'

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const findParent = (parents, target) => {
    if (parents[target] !== target) {
        parents[target] = findParent(parents, parents[target]);
    }
    return parents[target];
}

const union = (parents, a, b) => {
    a = findParent(parents, a);
    b = findParent(parents, b);
    if (a, b) {
        parents[b] = a;
    } else {
        parents[a] = b;
    }
    return parents;
}

const solution = function (input) {
    const [n, m, t] = input.shift().split(" ").map(elem => parseInt(elem));
    const edges = input.map(edge => edge.split(" ").map(elem => parseInt(elem)));
    let parents = [...new Array(n + 1)].map((_, idx) => idx);
    let additionalCost = 0;
    let res = 0;
    edges.sort((a, b) => a[2] - b[2]);
    for (const edge of edges) {
        const [a, b, c] = edge;
        if (findParent(parents, a) !== findParent(parents, b)) {
            parents = union(parents, a, b);
            res += (c + additionalCost);
            additionalCost += t;
            // console.log(a, b);
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