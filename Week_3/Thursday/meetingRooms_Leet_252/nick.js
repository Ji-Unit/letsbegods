/* 
	Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.

 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
*/

const canAttendMeetings = intervals => {
  if (intervals.length < 2) {
    return true;
  }
  const orderByStart = intervals.slice().sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (orderByStart[i - 1].end > orderByStart[i].start) {
      return false;
    }
  }
  return true;
};
