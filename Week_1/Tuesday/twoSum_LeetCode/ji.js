/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (indexMap[diff] !== undefined) {
            return [i, indexMap[diff]];
        }
        indexMap[num] = i;
    }
    throw "No matches";
};
