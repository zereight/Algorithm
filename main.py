'use strict'
class MaxHeapTree {
    values = []

    isEmpty() {
        return this.values.length === 0
    }

    parentIndexOf(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChildIndexOf(index) {
        return index * 2 + 1
    }

    rightChildIndexOf(index) {
        return index * 2 + 2
    }

    push(n) {
        let index = this.values.length
        this.values.push(n)
        while (index !== 0) {
            const parentIndex = this.parentIndexOf(index)
            if (this.values[index] <= this.values[parentIndex]) {
                break
            } else {
                this.swapValue(parentIndex, index)
                index = parentIndex
            }
        }
    }

    pop() {
        if (this.values.length === 1) {
            return this.values.pop()
        }

        const retValue = this.values[0]
        this.values[0] = this.values.pop()
        let index = 0
        while (index < this.values.length - 1) {
            const leftChildIndex = this.leftChildIndexOf(index)
            const rightChildIndex = this.rightChildIndexOf(index)
            if (this.getValueOrMin(leftChildIndex) <= this.getValueOrMin(index) &&
                this.getValueOrMin(rightChildIndex) <= this.getValueOrMin(index)) {
                break
            } else if (this.getValueOrMin(leftChildIndex) < this.getValueOrMin(rightChildIndex)) {
                this.swapValue(index, rightChildIndex)
                index = rightChildIndex
            } else {
                this.swapValue(index, leftChildIndex)
                index = leftChildIndex
            }
        }
        return retValue
    }

    swapValue(index1, index2) {
        const tmp = this.values[index1]
        this.values[index1] = this.values[index2]
        this.values[index2] = tmp
    }

    getValueOrMin(idx) {
        if (this.values.length <= idx) {
            return -1
        }
        return this.values[idx]
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

const solution = (input) => {
    const q = new MaxHeapTree();
    let answer = "";

    input.forEach(element => {
        element = parseInt(element);
        if (element > 0) {
            q.push(element);
        } else {
            if (q.isEmpty()) {
                answer += "0\n";
            } else {
                answer += `${q.pop()}\n`;
            }
        }
    });
    console.log(answer);

};


const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input.slice(1));
    process.exit();
});
