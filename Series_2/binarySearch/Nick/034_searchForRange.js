/*
  Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

  Your algorithm's runtime complexity must be in the order of O(log n).

  If the target is not found in the array, return [-1, -1].

  Example 1:

  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]
  Example 2:

  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force
const searchRange = (nums, target) => {
  const res = [-1, -1];
  let startFound = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (!startFound) {
        res[0] = i;
        res[1] = i;
        startFound = true;
      } else {
        res[1] = i;
      }
    }
  }
  return res;
};

// binary search

const searchHelper = (nums, target, isLeft) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let leftIdx = -1;
  let rightIdx = -1;

  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      if (isLeft) {
        leftIdx = mid;
        end = mid - 1;
      } else {
        rightIdx = mid;
        start + mid + 1;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return isLeft ? leftIdx : rightIdx;
};

const searchRange = (nums, target) => {
  const left = searchHelper(nums, target, true);
  if (left === -1) {
    return [left, left];
  }
  const right = searchHelper(nums, target, false);
  return [left, right];
};
