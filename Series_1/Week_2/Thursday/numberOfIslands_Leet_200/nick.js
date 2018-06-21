/*
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

const sink = (grid, i, j) => {
  // break condition
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || !isIsland(grid[i][j])) {
    return;
  }

  // set current coords to 0
  grid[i][j] = '0';

  // spread out and sink remaining portions of island
  sink(grid, i + 1, j); // down
  sink(grid, i - 1, j); // up
  sink(grid, i, j + 1); // right
  sink(grid, i, j - 1); // left
}

const isIsland = coords => coords === '1';

const numIslands = (grid) => {
  let count = 0;

  // edge case
  if (!grid.length) {
    return count;
  }
  // iterate through and check for an island
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (isIsland(grid[i][j])) {
        count++;
        sink(grid, i, j);
      }
    }
  }

  return count;
}