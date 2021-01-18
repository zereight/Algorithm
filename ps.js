/**
 * @param {string} s
 * @return {number}
 */

const getValue = (previousChr, currChr) => {
    switch(currChr){
        case 'I':
            return 1;
        case 'V':
            if(previousChr==='I'){
                return 4-1;
            }
            return 5;
        case 'X':
            if(previousChr==='I'){
                return 9-1;
            }
            return 10;
        case 'L':
            if(previousChr==='X'){
                return 40-10;
            }
            return 50;
        case 'C':
            if(previousChr==='X'){
                return 90-10;
            }
            return 100;
        case 'D':
            if(previousChr==='C'){
                return 400-100;
            }
            return 500;
        case 'M':
            if(previousChr==='C'){
                return 900-100;
            }
            return 1000;
    }
}

var romanToInt = function(s) {
    let ans = 0;
    let prev = '';
    for(const chr of s){
        ans += getValue(prev, chr);
        prev = chr;
    }
    return ans;
};
