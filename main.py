const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (a, b) => {
    const aLength = a.length,
        bLength = b.length;
    const answer = [];
    let aIndex = 0,
        bIndex = 0;
    a = a.map(e => parseInt(e));
    b = b.map(e => parseInt(e));
    while (aIndex < aLength || bIndex < bLength) {
        if (aIndex < aLength && bIndex < bLength) {
            if (a[aIndex] > b[bIndex]) {
                answer.push(b[bIndex]);
                bIndex++;
            } else {
                answer.push(a[aIndex]);
                aIndex++;
            }
        } else {
            if (aIndex < aLength) {
                // while (aIndex < aLength) {
                //     answer.push(a[aIndex]);
                //     aIndex++;
                // }
                answer.push(...a.slice(aIndex));
                aIndex = aLength;
            } else {
                // while (bIndex < bLength) {
                //     answer.push(b[bIndex]);
                //     bIndex++;
                // }
                answer.push(...b.slice(bIndex));
                bIndex = bLength;
            }
        }

    }
    console.log(answer.join(" "));
}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {
    const a = input[1].length === 1 ? [input[1]] : input[1].split(" ");
    const b = input[2].length === 1 ? [input[2]] : input[2].split(" ");
    delete input;
    solution(a, b);
    process.exit();
});
