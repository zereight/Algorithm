const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = l => {
    
    let ascending =true;
    let descending = true;
    for(let i=0; i<l.length-1; i++){
        if(l[i] - l[i+1] !== 1){
            descending = false;
        }else if(l[i] - l[i+1] !== -1){
            ascending = false;
        }
    }

    if(ascending || descending){
        console.log( ascending ? "ascending" : "descending" );
    }else{
        console.log("mixed");
    }

}

let input = null;
rl.on("line", function(line) {
    input = line.split(" ").map(l => parseInt(l));

  }).on("close", function() {
    

    solution(input);
    process.exit();
});
