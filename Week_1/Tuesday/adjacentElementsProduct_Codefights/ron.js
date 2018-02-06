/*
  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

  Example

  For inputArray = [3, 6, -2, -5, 7, 3], the output should be
  adjacentElementsProduct(inputArray) = 21.

  7 and 3 produce the largest product.
*/

const adjacentElementsProduct = inputArray => {
  let max = inputArray[0] * inputArray[1];
  let product;
  for (const [index, num] of inputArray.entries()) {
    if (index > 1) {
      product = num * inputArray[index - 1];
      max = Math.max(product, max);
    }
  }
  return max;
};
