const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (students) => {
    students = students.map(student => {
        const res = student.split(" ");
        res[1] = parseInt(res[1]);
        res[2] = parseInt(res[2]);
        res[3] = parseInt(res[3]);
        return res;
    });
    students.sort(
        (a, b) => {
            if (a[1] !== b[1]) {
                return -(a[1] - b[1]);
            } else if (a[2] !== b[2]) {
                return (a[2] - b[2]);
            } else if (a[3] !== b[3]) {
                return -(a[3] - b[3]);
            } else {
                if (a[0] < b[0]) {
                    return -1;
                } else if (a[0] > b[0]) {
                    return 1;
                } else {
                    return 0;
                }
            }

        }
    );

    for (let i = 0; i < students.length; i++) {
        console.log(students[i][0]);
    }

}

const input = [];
rl.on("line", function(line) {
    input.push(line);

}).on("close", function() {
    solution(input.slice(1));
    process.exit();
});
