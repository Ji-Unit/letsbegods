/* 
	Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
Example 1:
Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
Example 2:
Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
Note:
The given dict won't contain duplicates, and its length won't exceed 100.
All the strings in input have length in range [1, 1000].
*/

var addBoldTag = function(s, dict) {
  const map = Array(s.length).fill(0, 0, s.length);
  const open = '<b>';
  const close = '</b>';
  let isOpened = false;
  let start;
  let end = 0;
  let res = '';

  s.split('').forEach((char, i) => {
    Object.keys(dict).forEach(dictKey => {
      if (s.startsWith(dict[dictKey], i)) {
        end = Math.max(end, i + dict[dictKey].length);
      }
    });
    map[i] = end > i;
  });
  // format the string from map
  for (let i = 0; i < s.length; i++) {
    if (map[i] && !isOpened) {
      isOpened = true;
      res += open + s[i];
    } else if (!map[i] && isOpened) {
      isOpened = false;
      res += close + s[i];
    } else {
      res += s[i];
    }
  }
  if (isOpened) {
    res += close;
  }
  return res;
};
