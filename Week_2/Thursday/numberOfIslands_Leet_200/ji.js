var landMap = {};

var explore = function(grid, x, y) {
	//check land
	if (grid[x] === undefined) return 0;
	if (grid[x][y] === undefined) return 0;
	if (landMap[x + "-" + y] === 1) return 0;
	if (grid[x][y] == 1) {
		landMap[x + "-" + y] = 1;
		explore(grid, x - 1, y);
		explore(grid, x + 1, y);
		explore(grid, x, y + 1);
		explore(grid, x, y - 1);
		return 1;
	}
	if (grid[x][y] == 0) return 0;
};

var numIslands = function(grid) {
	var islands = 0;
	grid.forEach((row, x) => {
		row.forEach((column, y) => {
			islands = islands + explore(grid, x, y);
		});
	});
	//reset landMap for leetcode submitter -_-
	landMap = {};
	return islands;
};
