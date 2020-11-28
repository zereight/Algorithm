const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const splitByX = (string) => {
    if (string.includes("X")) {
        string = string.split("X");
    } else {
        string = Array(string);
    }
    return string;
}

const solution = (matrix) => {
    let rowCnt = 0;
    let colCnt = 0;
    let colString = "";
    for (let i = 0; i < matrix.length; i++) {
        for (const e of splitByX(matrix[i])) {
            if (e.includes("..")) {
                rowCnt++;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        colString = "";
        for (let j = 0; j < matrix.length; j++) {
            colString += matrix[j][i];
        }
        for (const e of splitByX(colString)) {
            if (e.includes("..")) {
                colCnt++;
            }
        }
    }
    console.log(rowCnt, colCnt);
};

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    delete input;

    solution(input.slice(1));

    process.exit();
});
