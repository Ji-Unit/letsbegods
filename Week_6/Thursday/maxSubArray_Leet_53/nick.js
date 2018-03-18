/*
	Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let currSum = nums[0];
  let maxSum = nums[0];
  nums.forEach((num, i) => {
    if (i === 0) return;
    currSum = Math.max(currSum + num, num);
    maxSum = Math.max(maxSum, currSum);
  });
  return maxSum;
};
