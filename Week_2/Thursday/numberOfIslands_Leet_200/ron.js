const isIsland = item => item === '1';

// once you find an island, remove all islands around it before trying to find the next island
const discountIsland = (grid, idx1, idx2) => {
  // don't go out of bounds
  if (
    idx1 < 0 ||
    idx2 < 0 ||
    idx1 >= grid.length ||
    idx2 >= grid[idx1].length ||
    !isIsland(grid[idx1][idx2])
  ) {
    return;
  }

  grid[idx1][idx2] = '0';

  discountIsland(grid, idx1 - 1, idx2);
  discountIsland(grid, idx1 + 1, idx2);
  discountIsland(grid, idx1, idx2 + 1);
  discountIsland(grid, idx1, idx2 - 1);
};

const numIslands = function(grid = [[]]) {
  let count = 0;

  grid.forEach((row, index) => {
    row.forEach((potentialIsland, innerIndex) => {
      if (isIsland(potentialIsland)) {
        count++;
        discountIsland(grid, index, innerIndex);
      }
    });
  });

  return count;
};
