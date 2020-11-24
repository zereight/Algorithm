const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (l) => {

    let cnt = 1;
    l.forEach(e => {
        let answer = 0;
        e.split(" ").map(ee => { answer += parseInt(ee) });
        console.log(`Case #${cnt}: ${answer}`);
        cnt++;
    });

}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {


    solution(input.slice(1));
    process.exit();
});
