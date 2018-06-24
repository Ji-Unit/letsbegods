/*
  Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

  Example 1:
  Input: [1,1,2,3,3,4,4,8,8]
  Output: 2
  Example 2:
  Input: [3,3,7,7,10,11,11]
  Output: 10
  Note: Your solution should run in O(log n) time and O(1) space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force
const singleNonDuplicate = nums => {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

// bin search
const singleNonDuplicate = nums => {
  let start = 0;
  let end = nums.length;
  let mid = 0;

  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    // ensure we are always on the first pair of repeating numbers
    if (mid % 2 !== 0) {
      mid--;
    }
    if (nums[mid] !== nums[mid + 1]) {
      end = mid;
    } else {
      // skip to the next pair
      start = mid + 2;
    }
  }
  return nums[start];
};
