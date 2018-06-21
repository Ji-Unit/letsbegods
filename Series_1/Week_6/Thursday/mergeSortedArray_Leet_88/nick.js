/*
	Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
	Test Cases:
	1) [1] -> [1] => [1, 1]
	2) [0] -> [0, 1] => [0, 0, 1]
	3) [1, 2, 3] -> [4, 5, 6] => [1, 2, 3, 4, 5, 6]
	4) [1, 2, 3] -> [1, 2] => [1, 1, 2, 2, 3]
 */

var merge = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  let m = nums1.length - 1;
  let n = nums2.length - 1;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m];
      m--;
    } else {
      nums1[len] = nums2[n];
      n--;
    }
  }
  return nums1;
};
