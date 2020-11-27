const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (n) => {
    let sum = 0;
    let answer = -1;
    n = Array.from(n);
    n.map((e) => { sum += parseInt(e); })

    if (sum % 3 === 0) {
        n.sort();
        n.reverse();
        if (n[n.length - 1] === '0') {
            answer = n.join("");
        }
    }
    console.log(answer);
}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {
    const n = input[0]

    solution(n);
    process.exit();
});
