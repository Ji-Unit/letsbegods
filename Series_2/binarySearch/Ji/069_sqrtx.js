/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 0;
  let end = x;
  let mid;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (mid * mid === x || ((mid + 1) * (mid + 1) > x && mid * mid < x))
      return mid;
    if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
};
