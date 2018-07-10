/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = nums => {
  const cached = nums.reduce((memo, num) => {
    memo[num] = ++memo[num] || 1;
    return memo;
  }, {});
  const keys = Object.keys(cached);
  for (let i = 0; i < keys.length; i++) {
    if (cached[keys[i]] > nums.length / 2) {
      return Number(keys[i]);
    }
  }
};
