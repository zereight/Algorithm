function solution(n) {
    var answer = 0;
    let temp_3 = n.toString(3);
    temp_3 = temp_3.split("").reverse().join("");

    answer = Number.parseInt(temp_3, 3);


    return answer;
}
