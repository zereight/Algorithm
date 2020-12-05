'use strict'

const readline = require("readline");
const {
    appendFile
} = require("fs");
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
    const [n, m, k] = input.shift().split(" ").map(elem => parseInt(elem))
    const powerPlants = input.shift().split(" ").map(elem => parseInt(elem));
    const edges = [];
    let parents = [...new Array(n + 1)].map((_, idx) => idx);
    let res = 0;
    for (const edge of input) {
        const [u, v, w] = edge.split(" ").map(elem => parseInt(elem));
        edges.push([u, v, w]);
    }

    // 발전소끼리는 모두 union으로 묶어준다.
    for (let i = 0; i < powerPlants.length - 1; i++) {
        const powerPlant = powerPlants[i];
        const nextPowerPlant = powerPlants[i + 1];
        parents = union(parents, powerPlant, nextPowerPlant);
    }

    edges.sort((a, b) => a[2] - b[2]);
    // console.log(edges);
    edges.forEach((edge) => {
        const [u, v, w] = edge;
        if (findParent(parents, u) !== findParent(parents, v)) {
            // console.log();
            // console.log(findParent(parents, u), findParent(parents, v))
            parents = union(parents, u, v);
            // console.log(u, v);
            res += w;
        }
    });
    // console.log(parents);
    console.log(res);
};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});