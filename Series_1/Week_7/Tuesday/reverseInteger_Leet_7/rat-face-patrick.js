/**
 * @param {number} x
 * @return {number}
 */
const reverseAndConvert = number => number.toString().split('').reverse().join('');

const reverse = x => {
    const max32BitInteger = 2147483647; // thanks nick

    const isPositive = x > 0;
    const revseredNumber = isPositive ? +reverseAndConvert(x) : +reverseAndConvert(x *= -1)

    if (revseredNumber > max32BitInteger) return 0;
    return isPositive ? revseredNumber : revseredNumber * -1;
};
