// cut out all zeroes found and put it at the end of the array
const moveZeroes = nums => {
  // go backwards through the array because items are shifting right you might miss a zero
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
};
