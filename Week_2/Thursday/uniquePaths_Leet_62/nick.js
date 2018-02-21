/*
	A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/
const uniquePaths = (m, n) => {
  const board = [];
  let lastTopVal;
  let lastLeftVal;
  // make grid full of 1's
  for (let i = 0; i < m; i++) {
    board.push(Array(n).fill(1, 0, n));
  }
  // fill in the rest. each part of grid (excluding top row and first col)
  // represents number of ways to get there
  for (let j = 1; j < m; j++) {
    for (let k = 1; k < n; k++) {
      lastTopVal = board[j - 1][k];
      lastLeftVal = board[j][k - 1];
      board[j][k] = lastTopVal + lastLeftVal;
    }
  }
  console.log(board);
  return board[m - 1][n - 1];
};
