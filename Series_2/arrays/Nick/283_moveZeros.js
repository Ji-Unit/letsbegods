/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZeroes = nums => {
  let last = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[lastReplaceIdx];
      nums[lastReplaceIdx] = nums[i];
      nums[i] = temp;
      lastReplaceIdx++;
    }
  }
};
