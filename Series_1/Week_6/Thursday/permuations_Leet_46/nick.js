/*
	Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const permutateHelper = (curr, remain) => {
    if (!remain.length) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < remain.length; i++) {
      curr.push(remain[i]);
      permutateHelper(curr, remain.slice(0, i).concat(remain.slice(i + 1)));
      curr.pop();
    }
  };
  permutateHelper([], nums);
  return res;
};
