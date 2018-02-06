function maxCheck(max, number) {
	if (number > max) return number;
	return max;
}
/* 
 * Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.
*/

function adjacentElementsProduct(inputArray) {
	let max = -1001;
	inputArray.forEach((num, index) => {
		if (index !== 0) {
			const preCurrProduct = num * inputArray[index - 1];
			max = maxCheck(max, preCurrProduct);
		}
		if (index !== inputArray.length - 1) {
			const postCurrProduct = num * inputArray[index + 1];
			max = maxCheck(max, postCurrProduct);
		}
	});

	return max;
}
