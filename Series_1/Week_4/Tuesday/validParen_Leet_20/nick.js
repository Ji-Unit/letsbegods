/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
)]
*/

const isValid = s => {
  if (s.length % 2 !== 0) {
    return false;
  }
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const memo = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      memo.push(map[s[i]]);
    } else {
      if (memo.pop() !== s[i]) {
        return false;
      }
    }
  }
  return memo.length === 0;
};
