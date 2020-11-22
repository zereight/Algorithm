function solution(arr, divisor) {
    const temp = []
    arr.map(
        (a) => {
            if( a%divisor == 0 ){
                temp.push( 
                    a
                );
            }
            
        }
    )

    temp.sort(
        (a,b) => a-b
    )
    
    if(temp.length == 0){
        temp.push(-1)
    }

    return temp;
}
