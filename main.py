const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (string) => {
    const info = new Array(string.length).fill(0);
    let canFlip = true;
    let firstFind = false;
    let answer = '';
    let start = 0;
    let end = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "<") {
            canFlip = false;
        } else if (string[i] === ">") {
            canFlip = true;
        } else {
            if (canFlip && string[i] !== " ") {
                info[i] = 1;
            }
        }
    }
    for (let i = 0; i < info.length;) {
        if (info[i] === 1) {
            if (!firstFind) {
                firstFind = true;
                start = i;
            }
            i++;
        } else {
            if (firstFind) {
                end = i;
                answer += Array.from(string.slice(start, end)).reverse().join("");
                firstFind = false;
            }

            answer += string[i];
            i++;
        }
    }
    if (firstFind) {
        end = info.lenght;
        answer += Array.from(string.slice(start, end)).reverse().join("");
        firstFind = false;
    }
    console.log(answer);
};

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input[0]);
    process.exit();
});
