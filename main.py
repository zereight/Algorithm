'use strict'

function PriorityQueue(comparator) { //https://github.com/janogonzalez/priorityqueuejs/blob/master/index.js

    this.defaultComparator = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        } else {
            a = a.toString();
            b = b.toString();
            if (a == b) return 0;
            return a > b ? 1 : -1;
        }
    }

    const _comparator = comparator || this.defaultComparator;
    const _elements = [];

    const _compare = function (a, b) {
        return _comparator(_elements[a], _elements[b]);
    }

    const _swap = function (a, b) {
        const tmp = _elements[a];
        _elements[a] = _elements[b];
        _elements[b] = tmp;
    }



    this.getSize = function () {
        return _elements.length;
    }
    this.isEmpty = function () {
        return this.getSize() === 0;
    }

    this.peek = function () {
        try {
            return _elements[0];
        } catch (e) {
            throw new Error("queue is empty");
        }
    }

    this.dequeue = function () {
        if (this.getSize() === 0) {
            throw new Error("Empty queue");
        }

        let first = this.peek();
        let last = _elements.pop(); // 1개 뺌
        let size = this.getSize();

        if (size === 0) return last; // 1개 빼서 0개이면 마지막으로 뺏던 last반환

        _elements[0] = last;
        let current = 0;

        while (current < size) {
            let largest = current;
            let left = (2 * current) + 1;
            let right = (2 * current) + 2;

            if (left < size && _compare(left, largest) >= 0) {
                largest = left;
            }

            if (right < size && _compare(right, largest) >= 0) {
                largest = right;
            }

            if (largest === current) break;

            _swap(largest, current);
            current = largest;
        }

        return first;
    }

    this.enqueue = function (elem) {
        let size = _elements.push(elem);
        let current = size - 1;

        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (_compare(current, parent) <= 0) break;
            _swap(parent, current);
            current = parent;
        }

        return size;
    }

    this.forEach = function (fn) {
        return _elements.forEach(fn);
    }

    this.getArray = function () {
        return _elements.slice();
    }
}

const readline = require("readline");
const {
    parse
} = require("path");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = function (input) {
    const n = parseInt(input[0]);
    const arr = input[1].split(" ").map(elem => parseInt(elem));
    const pq = new PriorityQueue();
    let score = 0;
    arr.forEach(
        a => {
            pq.enqueue(a);
        }
    );
    while (pq.getSize() > 1) {
        const max1 = pq.dequeue();
        const max2 = pq.dequeue();

        pq.enqueue(max1 + max2);
        score += max1 * max2;
    }
    console.log(score);
};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});
