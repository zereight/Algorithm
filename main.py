const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (a,b) => {
    c1 = parseInt(a);
    c2 = new Array(b[0], b[1], b[2]).map( a => parseInt(a) );
    // console.log(c2);
    c3 = c1*c2[2];
    c4 = c1*c2[1];
    c5 = c1*c2[0];
    c6 = c3+c4*10+c5*100;
    console.log(c3);
    console.log(c4);
    console.log(c5);
    console.log(c6);
}

const input = [];
rl.on("line", function(line) {
    input.push( line )
  }).on("close", function() {
    solution(input[0], input[1]);
    process.exit();
});
