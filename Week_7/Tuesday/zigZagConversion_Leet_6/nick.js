// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const res = [];
  let rowIndex = 0;
  let isGoDown = true;
  s.split('').forEach(char => {
    if (res[rowIndex] === undefined) {
      res[rowIndex] = '';
    }
    res[rowIndex] += char;
    if (rowIndex === 0) {
      isGoDown = true;
    } else if (rowIndex === numRows - 1) {
      isGoDown = false;
    }

    if (isGoDown) {
      rowIndex++;
    } else if (!isGoDown) {
      rowIndex--;
    }
  });
  return res.join('');
};
