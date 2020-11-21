function getAllCombinations(arr, m) {
    let res = []
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            res.push( [arr[i], arr[j]] );
        }
    }
    return res;
}
function solution(numbers) {
    var answer = [];
    
    getAllCombinations(numbers, 2).map(
        a => {
            answer.push(a[0]+a[1])
        }
    )
    
    answer = [...new Set(answer)]
    answer.sort(
        (_a1, _a2) => _a1-_a2
    );
    
    return answer;
}

console.log(solution([5,0,2,7]))
