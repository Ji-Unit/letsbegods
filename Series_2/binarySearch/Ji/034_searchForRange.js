/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
  let result = [-1, -1];
  let start = 0;
  let end = nums.length;
  let mid;
  //find left side
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  if (nums[start] === target) result[0] = start;
  start = 0;
  end = nums.length;
  //find right side
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2) + 1;
    if (nums[mid] <= target) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
  result[1] = nums[end] === target ? end : result[0];
  return result;
};
