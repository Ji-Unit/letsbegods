/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const finalResults = [];
    retriever(finalResults, [], nums);
    return finalResults;
};

const retriever = function(final, tempResult, nums) {
    tempResult = [...tempResult];
    if (!nums.length) {
        final.push(tempResult);
        return;
    }

    nums.forEach((item, i) => {
        tempResult.push(item);
        const slicedNums = nums.slice(0, i).concat(nums.slice(i + 1));
        retriever(final, tempResult, slicedNums);
        tempResult.pop();
    });
};
