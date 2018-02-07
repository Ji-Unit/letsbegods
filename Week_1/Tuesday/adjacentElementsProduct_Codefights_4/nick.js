/*
  Prompt: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

  Example: For inputArray = [3, 6, -2, -5, 7, 3], the output should be
           adjacentElementsProduct(inputArray) = 21.
           7 and 3 produce the largest product.
*/

const adjacentElementsProduct = (arr) => {
  // Edge cases
  if (!arr || !arr.length || arr.length < 2) {
    return null;
  }

  let greatest = arr[0] * arr[1];
  let product;

  arr.forEach((num, i) => {
    if (i > 1) {
      product = arr[i] * arr[i-1];
      if (product > greatest) {
        greatest = product;
      }
    }
  });

  return greatest;
};
