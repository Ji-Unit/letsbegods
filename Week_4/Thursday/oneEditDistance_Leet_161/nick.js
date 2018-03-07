/*
	Given two strings S and T, determine if they are both one edit distance apart.
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
  // default false case

  if (s === t || Math.abs(s.length - t.length) > 1) {
    return false;
  }
  // at this point s and t are either same length of diff by 1
  let diffIndex = 0;
  let shouldIterate = true;
  while (shouldIterate) {
    if (s[diffIndex] !== t[diffIndex]) {
      shouldIterate = false;
    } else {
      diffIndex++;
    }
  }
  if (s.length === t.length) {
    // is rest of string the same?
    return s.substring(diffIndex + 1) === t.substring(diffIndex + 1);
  } else if (s.length > t.length) {
    return s.substring(diffIndex + 1) === t.substring(diffIndex);
  } else {
    return s.substring(diffIndex) === t.substring(diffIndex + 1);
  }
};
