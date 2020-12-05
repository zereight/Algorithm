'use strict'

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class PQ {
    constructor(size) {
        this.node = 1;
        this.tree = new Array(size + 1).fill(0);
    }

    push(val) {
        const {
            tree
        } = this;
        if (this.node >= tree.length) {
            console.log('overflow');
            return;
        }

        tree[this.node] = val;
        this.node += 1;
        let child = this.node - 1;

        while (child > 1) {
            const parent = Math.floor(child / 2);
            if (tree[child] < tree[parent]) { // 정렬 기준
                const temp = tree[child];
                tree[child] = tree[parent];
                tree[parent] = temp;
            } else {
                break;
            }
            child = parent;
        }
    }

    isEmpty() {
        return this.node <= 1;
    }

    pop() {
        const {
            tree
        } = this;
        if (this.node <= 1) {
            // console.log('empty');
            return;
        }

        const popped = tree[1];
        tree[1] = tree[this.node - 1];
        this.node -= 1;
        let parent = 1;

        while (parent < this.node - 1) {
            let child = -1;
            if (parent * 2 >= this.node) {
                break;
            } else if (parent * 2 < this.node && parent * 2 + 1 >= this.node) {
                child = parent * 2;
            } else {
                if (tree[parent * 2] < tree[parent * 2 + 1]) {
                    child = parent * 2;
                } else {
                    child = parent * 2 + 1;
                }
            }

            if (tree[child] < tree[parent]) {
                const temp = tree[child];
                tree[child] = tree[parent];
                tree[parent] = temp;
                parent = child;
            } else {
                break;
            }
        }
        return popped;
    }
}

// 위상정렬
const solution = function (input) {
    const [n, m] = input[0].split(" ").map(elem => parseInt(elem));

    // 간선을 추가한다
    const edges = [...new Array(n + 1)].map(() => []);
    const entryCount = new Array(n + 1).fill(0);
    const ans = [];

    input.slice(1).forEach(element => {
        const [start, end] = element.split(" ").map(elem => parseInt(elem));
        edges[start].push(end);
        entryCount[end]++;
    });

    const q = new PQ(n + 1);
    // entry가 0인 문제를 찾는다.
    for (let i = 1; i < n + 1; i++) {
        if (entryCount[i] === 0) {
            q.push(i);
            entryCount[i]--; // -1로 만들어줌
        }
    }
    while (!q.isEmpty()) {
        // 간선을 이용해서 entry를 줄인다
        const first = q.pop();

        ans.push(first);
        edges[first].forEach(
            dest => {
                entryCount[dest]--;
                if (entryCount[dest] === 0) {
                    q.push(dest);
                    entryCount[dest]--; // -1로 만들어줌
                }
            }
        );


    }

    console.log(ans.join(' '));
};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});
