/*
	Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

[2, 7], [5, 17], [9, 12], [12, 17]
[2, 7], [9, 12], [5, 17], [12, 17]
{ start: 2, end: 11}, { start: 6, end: 16}, { start: 11, end: 16}, { start: 12, end: 17}
[[2,11],[6,16],[11,16]]
*/

const minMeetingRooms = intervals => {
  const startTimes = intervals.map(item => item.start).sort((a, b) => a - b);
  const endTimes = intervals.map(item => item.end).sort((a, b) => a - b);
  let endTime;
  let rooms = 0;
  let endIndx = 0;
  startTimes.forEach((startTime, i) => {
    endTime = endTimes[endIndx];
    if (startTime < endTime) {
      rooms++;
    } else {
      endIndx++;
    }
  });
  return rooms;
};

// better for explanation
const minMeetingRooms = intervals => {
  const startTimes = intervals.map(item => item.start).sort((a, b) => a - b);
  const endTimes = intervals.map(item => item.end).sort((a, b) => a - b);

  let roomsNeeded = 0;
  let roomsAvailable = 0;
  let startInd = 0;
  let endInd = 0;

  while (startInd < intervals.length) {
    if (startTimes[startInd] < endTimes[endInd]) {
      if (!roomsAvailable) {
        roomsNeeded++;
      } else {
        roomsAvailable--;
      }
      startInd++;
    } else {
      roomsAvailable++;
      endInd++;
    }
  }
  return roomsNeeded;
};

// another one

const minMeetingRooms = intervals => {
  let rooms = 0;
  let max = 0;
  const meetingTimes = intervals.reduce((memo, curr) => {
    memo[curr.start] = memo[curr.start] || 0;
    memo[curr.start]++;
    memo[curr.end] = memo[curr.end] || 0;
    memo[curr.end]--;
    return memo;
  }, {});

  for (let timeKey in meetingTimes) {
    if (meetingTimes.hasOwnProperty(timeKey)) {
      rooms += meetingTimes[timeKey];
      max = Math.max(rooms, max);
    }
  }
  return max;
};
