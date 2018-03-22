/*
	Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:

Input: "cbbd"

Output: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */

// naive way
const isPalindrome = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

var longestPalindrome = function(s) {
  let substr;
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[i] === s[j]) {
        substr = s.substring(i, j + 1);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  return longest;
};

// better way
