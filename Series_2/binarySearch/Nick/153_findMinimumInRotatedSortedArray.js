/*
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

  Find the minimum element.

  You may assume no duplicate exists in the array.

  Example 1:

  Input: [3,4,5,1,2]
  Output: 1
  Example 2:

  Input: [4,5,6,7,0,1,2]
  Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start < end - 1) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] < nums[start]) {
      end = mid;
    } else if (nums[mid] > nums[end]) {
      start = mid;
    } else {
      return nums[start];
    }
  }
  return Math.min(nums[start], nums[end]);
};
