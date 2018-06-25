var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length;
    let mid;
    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        if (mid % 2 === 1) mid--;
        if (nums[mid] === nums[mid + 1]) {
            start = mid + 2;
        } else {
            end = mid;
        }
    }
    return nums[end];
};
