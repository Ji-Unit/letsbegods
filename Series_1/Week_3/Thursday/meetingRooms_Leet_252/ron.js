/* 
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
  Given [[0, 30],[5, 10],[15, 20]],
  return false. 
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
const canAttendMeetings = intervals => {
  if (intervals.length <= 1) {
    return true;
  }
  const copy = [...intervals].sort((a, b) => a.start - b.start);
  for (const [index, range] of copy.entries()) {
    if (index > 0 && range.start < copy[index - 1].end) {
      return false;
    }
  }
  return true;
};
