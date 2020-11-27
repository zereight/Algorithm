const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (nonListener, nonSawer) => {
    nonListener = new Set(nonListener);
    nonSawer = new Set(nonSawer);
    const answer = [];
    for (const e of nonListener) {
        if (nonSawer.has(e)) {
            answer.push(e);
        }
    }
    answer.sort(); // 실제 문자정렬일때에는 compare함수 안줘도 된다.
    console.log(answer.length);
    for (const a of answer) {
        console.log(a);
    }

}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {
    let n = input[0].split(" ").map(i => parseInt(i))[0];
    const nonListener = input.slice(1, n + 1);
    const nonSawer = input.slice(n + 1);

    solution(nonListener, nonSawer);
    process.exit();
});
