const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (s) => {
    const res = []
    s = Array.from(s);
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s.slice(i));
    }
    res.sort();
    res.map(
        r => {
            console.log(r.join(""));
        }
    );
}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {
    solution(input[0]);
    process.exit();
});
