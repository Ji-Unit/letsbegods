var minMeetingRooms = function(intervals) {
    const starts = intervals.map(times => times.start).sort((a, b) => a - b);
    const ends = intervals.map(times => times.end).sort((a, b) => a - b);
    let endIndex = 0;
    let rooms = 0;

    for (let i = 0; i < starts.length; i++) {
        const startTime = starts[i];
        const endTime = ends[endIndex];
        if (startTime < endTime) {
            rooms++;
        } else {
            endIndex++;
        }
    }
    return rooms;
};
