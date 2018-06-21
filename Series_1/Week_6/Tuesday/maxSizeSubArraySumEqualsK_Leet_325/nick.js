/*
	Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?

Strategy: 
	Use two pointers to indicated the substring to test. 
	Reduce and see if it adds up to the target, if it does 
*/

// brute force try
var maxSubArrayLen = function(nums, k) {
  let maxLength = 0;
  if (!nums.length) {
    return maxLength;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let subArr = nums.slice(i, j + 1);
      let sum = subArr.reduce((memo, curr) => {
        return memo + curr;
      }, 0);
      if (sum === k) {
        if (j - i + 1 > maxLength) {
          maxLength = j - i + 1;
        }
      }
    }
  }
  return maxLength;
};

// TODO: Understand this more deeply
var maxSubArrayLen = function(nums, k) {
  let currSum = 0;
  let max = 0;
  // The -1 accounts for the length
  let map = { 0: -1 };
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (map[currSum] === undefined) {
      map[currSum] = i;
    }

    if (map[currSum - k] !== undefined) {
      max = Math.max(max, i - map[currSum - k]);
    }
  }
  return max;
};
