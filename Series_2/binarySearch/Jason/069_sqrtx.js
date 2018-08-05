// Compute and return the square root of x, where 
// x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal 
// digits are truncated and only the integer part of the result is returned.

// Input: 4
// Output: 2

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.

// Try exploring all integers.
// Use the sorted property of integers to reduced the search space. 

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) 
        return 0

    let left = 0;
    let right = x;
    let mid;
    
    while(left <= right) {
        mid = Math.floor((right-left) / 2 + left);
        midSqRt = mid * mid;
        nextSqRt = (mid + 1) * (mid + 1);

        if(midSqRt <= x && nextSqRt > x) 
            return mid;

        midSqRt > x ? right = mid : left = mid + 1;
    }
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(16));
console.log(mySqrt(18));
console.log(mySqrt(25));
console.log(mySqrt(36));
console.log(mySqrt(64));
console.log(mySqrt(100));
console.log(mySqrt(23495802));