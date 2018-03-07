/*
	Given a string, find the length of the longest substring T that contains at most k distinct characters.

For example, Given s = “eceba” and k = 2,

T is "ece" which its length is 3.
*/

/*
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  const memo = {};
  let memoArr;
  let entries;
  let lowestIdx = 0;
  let longest = 0;
  s.split('').forEach((char, i) => {
    memo[char] = i;
    memoArr = Object.keys(memo);
    if (memoArr.length > k) {
      entries = memoArr.map(key => {
        return memo[key];
      });
      lowestIdx = entries.reduce((accum, curr) => {
        accum = Math.min(accum, curr);
        return accum;
      }, Infinity);
      delete memo[s[lowestIdx]];
      lowestIdx++;
    }
    longest = Math.max(longest, i - lowestIdx + 1);
  });
  return longest;
};
