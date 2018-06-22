/*
  Implement int sqrt(int x).

  Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

  Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

  Example 1:

  Input: 4
  Output: 2
  Example 2:

  Input: 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since
               the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */

// brute force
const mySqrt = x => {
  for (let i = 0; i <= x / 2 + 1; i++) {
    if (Math.pow(i, 2) === x) {
      return i;
    }
    if (Math.pow(i, 2) > x) {
      return i - 1;
    }
  }
  return x;
};

// using binary search

const mySqrt = x => {
  let start = 0;
  let end = Math.floor(x / 2) + 1;
  let mid;
  let sqrd;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    sqrd = Math.pow(mid, 2);
    if (sqrd < x) {
      start = mid + 1;
    } else if (sqrd > x) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return end;
};
