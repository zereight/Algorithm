function solution(s, n) {
    var answer = '';

    for(let i=0; i<s.length; i++){
        if(s[i] == " "){
            answer+=' ';
            continue;
        }

        let ascii = s[i].charCodeAt(0)
        if(ascii < 97){ // 대문자
            ascii = (ascii+n - 'A'.charCodeAt(0))%26 + 'A'.charCodeAt(0)
        }else{ // 소문자
            ascii = (ascii+n - 'a'.charCodeAt(0))%26 + 'a'.charCodeAt(0)
        }
        answer += String.fromCharCode(ascii);

    }

    return answer;
}
