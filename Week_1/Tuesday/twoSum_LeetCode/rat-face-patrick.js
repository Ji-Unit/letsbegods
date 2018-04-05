/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    let answer = [];
    nums.forEach((num, index) => {
       for (let i = index + 1; i < nums.length; i++) {
           if (num + nums[i] === target) {
               answer = [index, i];
           }
       }
    });
    return answer;
};
