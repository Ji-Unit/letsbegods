var moveZeroes = function(nums) {
	let validIndex = 0;
	nums.forEach((num, i) => {
		if (num !== 0) {
			let temp = nums[validIndex];
			nums[validIndex] = num;
			nums[i] = temp;
			validIndex++;
		}
	});
};
