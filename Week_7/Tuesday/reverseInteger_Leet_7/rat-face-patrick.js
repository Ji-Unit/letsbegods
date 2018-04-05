/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let numToChange = x;
  const max32BitInteger = 2147483647; // thanks nick

  const isPositive = numToChange > 0;
  const positiveNumber = isPositive ? numToChange : numToChange *= -1;
  const revseredNumString = positiveNumber.toString().split('').reverse().join('');
  const revseredNumber = +revseredNumString;

  if (revseredNumber > max32BitInteger) return 0;
  return isPositive ? revseredNumber : revseredNumber * -1;
};
