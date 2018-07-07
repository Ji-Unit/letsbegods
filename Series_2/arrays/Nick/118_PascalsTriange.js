/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

const generate = numRows => {
  const res = [];

  if (numRows <= 0) {
    return res;
  }

  for (let i = 0; i < numRows; i++) {
    const curr = [];
    const prev = i > 0 ? res[i - 1] : [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curr.push(1);
      } else {
        curr.push(prev[j - 1] + prev[j]);
      }
    }
    res.push(curr);
  }
  return res;
};
