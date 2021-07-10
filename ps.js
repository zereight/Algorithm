/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	k = k % nums.length;
	const temp = nums.splice(nums.length-k , nums.length - 1)
	nums.unshift(...temp);
	return nums;
};

console.log(rotate([-1,-100,3,99],2));
console.log(rotate([1,2,3,4,5,6,7],3));
