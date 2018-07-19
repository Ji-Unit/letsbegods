/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
*/

const findMaxConsecutiveOnes = nums => {
  let curr = 0;
  let max = 0;

  nums.forEach(num => {
    if (num === 1) {
      curr++;
    } else {
      curr = 0;
    }
    max = Math.max(max, curr);
  });
  return max;
};
