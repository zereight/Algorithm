function solution(n) {
    var answer = '';

    let temp = ["수", "박"];

    for(let i=0; i<n; i++){
        answer += temp[i%2];
    }

    return answer;
}
