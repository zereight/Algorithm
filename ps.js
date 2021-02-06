/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxNumber = 0;
    nums.forEach((a,i) => {
        nums.forEach((b,j) => {
            if(i!==j){
                maxNumber = Math.max(maxNumber, (a-1)*(b-1));    
            }
        })
    })
    return maxNumber;
};
