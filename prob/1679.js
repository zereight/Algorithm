"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dp = Array.from({ length: 100001 }, () => Infinity);
const visited = Array.from({ length: 100001 }, () => 0);

const solution = function (input) {
    const [n, k] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));
    
    const q = [n];
    dp[n] = 0;
    visited[n] = 1;

    while(q.length > 0){
        const curr = q.shift();
        if(curr+1 < 1000001){
            if(dp[curr+1] > dp[curr]+1 && !visited[curr+1]){
                dp[curr+1] = dp[curr]+1;
                q.push(curr+1);
                visited[curr+1] = 1;
            }
        }
        if(curr-1 >= 0){
            if(dp[curr-1] > dp[curr]+1 && !visited[curr-1]){
                dp[curr-1] = dp[curr]+1;
                q.push(curr-1);
                visited[curr-1] = 1;
            }
        }
        if(curr*2 < 1000001 && !visited[curr*2]){
            if(dp[curr*2] > dp[curr]+1){
                dp[curr*2] = dp[curr]+1;
                q.push(curr*2);
                visited[curr*2] = 1;
            }
        }
        // console.log(q);
    }
    console.log(dp[k]);

};

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
