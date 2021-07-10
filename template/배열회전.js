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
