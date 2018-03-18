/*
	Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned 
*/

const nextClosestTime = time => {
  const timeDigits = time
    .replace(':', '')
    .split('')
    .map(num => Number(num));
  let closest = false;
  let changedIdx;
  for (let i = time.length - 1; i >= 0; i--) {
    if (time[i] === ':') continue;
    let greaterSorted = timeDigits.filter(num => num > timeDigits[i]).sort((a, b) => a - b);
    if (i === 3) {
      // replace with smallest, greater num
      if (greaterSorted.length) {
        timeDigits[3] = greaterSorted[0];
        closest = timeDigits.map(num => num);
        changedIdx = i;
        break;
      }
    } else if (i === 2) {
      greaterSorted = greaterSorted.filter(num => num < 6);
      if (greaterSorted.length) {
        timeDigits[2] = greaterSorted[0];
        closest = timeDigits.map(num => num);
        changedIdx = i;
        break;
      }
    } else if (i === 1) {
      if (timeDigits[0] === 2) {
        greaterSorted = greaterSorted.filter(num => num < 4);
      }
      if (greaterSorted.length) {
        timeDigits[1] = greaterSorted[0];
        closest = timeDigits.map(num => num);
        changedIdx = i;
        break;
      }
    } else {
      greaterSorted = greaterSorted.filter(num => num < 3);
      if (greaterSorted.length) {
        timeDigits[0] = greaterSorted[0];
        closest = timeDigits.map(num => num);
        changedIdx = i;
        break;
      }
    }
  }

  timeDigits.sort((a, b) => a - b);

  // turn any number after changed index to smallest num
  if (closest) {
    let res = closest.map((num, i) => {
      if (i > changedIdx) {
        return timeDigits[0];
      }
      return num;
    });
    return `${res[0]}${res[1]}:${res[2]}${res[3]}`;
  }
  // otherwise convert the rest to smaller
  return time
    .split('')
    .map(num => {
      if (num === ':') return ':';
      else return timeDigits[0];
    })
    .join('');
};
