/*
  Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

  Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

  Examples:
  Input:
  letters = ["c", "f", "j"]
  target = "a"
  Output: "c"

  Input:
  letters = ["c", "f", "j"]
  target = "c"
  Output: "f"

  Input:
  letters = ["c", "f", "j"]
  target = "d"
  Output: "f"

  Input:
  letters = ["c", "f", "j"]
  target = "g"
  Output: "j"

  Input:
  letters = ["c", "f", "j"]
  target = "j"
  Output: "c"

  Input:
  letters = ["c", "f", "j"]
  target = "k"
  Output: "c"
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// brute force
const nextGreatestLetter = (letters, target) => {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
};

// bin search
const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length;
  let mid;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (letters[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  if (end === letters.length) {
    return letters[0];
  } else {
    return letters[end];
  }
};
