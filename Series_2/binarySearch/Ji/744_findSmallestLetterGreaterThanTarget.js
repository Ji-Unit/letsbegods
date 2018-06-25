var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length;
    let mid;
    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        // <= because condition needs + 1
        if (letters[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return letters[start % letters.length];
};
