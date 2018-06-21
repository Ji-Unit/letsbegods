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

const permute = nums => {
  const res = {};
  let temp;

  const recurse = (source, curr) => {
    if (curr.length === nums.length) {
      res[JSON.stringify(curr)] = true;
      return;
    }
    for (let i = 0; i < source.length; i++) {
      curr.push(source[i]);
      temp = source.slice(0, i).concat(source.slice(i + 1));
      recurse(temp, curr);
      curr.pop();
    }
  };
  recurse(nums, []);
  return Object.keys(res).map(el => JSON.parse(el));
};
