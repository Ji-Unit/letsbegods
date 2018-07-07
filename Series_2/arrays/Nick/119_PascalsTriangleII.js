/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
*/

const getRow = rowIndex => {
  const res = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) {
        res[j] = 1;
      } else {
        res[j] = res[j] + res[j - 1];
      }
    }
  }
  return res;
};
