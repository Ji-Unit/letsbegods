/*
	Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x < 0;
  const max32BitInteger = 2147483647;
  // make it positive to makeit easier to deal with
  x = Math.abs(x);
  x = x + '';
  let reversed = x
    .split('')
    .reverse()
    .join('');
  let num = parseInt(reversed, 10);
  if (num > max32BitInteger) {
    return 0;
  } else {
    return isNeg ? -1 * num : num;
  }
};
