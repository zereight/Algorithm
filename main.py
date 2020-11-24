const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (a,b) => {
    if(a>b){
        console.log(">");
    }else if(a<b){
        console.log("<");
    }else{
        console.log("==");
    }
}

const input = [];
rl.on("line", function(line) {
    input.push( line )
  }).on("close", function() {
    const a = input[0].split(" ")[0];
    const b = input[0].split(" ")[1];

    solution(parseInt(a), parseInt(b));
    process.exit();
});
