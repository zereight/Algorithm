const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (l) => {

    l = l.map(_l => {
        let [a, b] = _l.split(" ");
        return [parseInt(a), parseInt(b)];
    });

    const answer = []
    l.forEach(_l => {
        let cnt = 0;
        l.forEach(e => {
            if (e[0] > _l[0] && e[1] > _l[1]) {
                cnt++;
            }
        });
        answer.push(cnt + 1);
    })

    console.log(answer.join(" "))
}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {

    solution(input.slice(1));
    process.exit();
});
