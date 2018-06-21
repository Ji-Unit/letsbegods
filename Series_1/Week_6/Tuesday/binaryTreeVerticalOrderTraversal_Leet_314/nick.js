/*
	Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples:

Given binary tree [3,9,20,null,null,15,7],
   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7
return its vertical order traversal as:
[
  [9],
  [3,15],
  [20],
  [7]
]
Given binary tree [3,9,8,4,0,1,7],
     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
return its vertical order traversal as:
[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),
     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2
return its vertical order traversal as:
[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]


Strategy:
 Root node's horizontal depth (hd) is 0.
 Children's hd is parent's hd - 1 for left and parent's hd + 1 for right
 cache all this in map
 return nodes in array structure
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (root === null) {
    return [];
  }
  const hash = {};
  const queue = [];
  let tuple, node, hDepth;
  // push rootNode and its hDepth into queue using tuple
  queue.push([root, 0]);

  while (queue.length) {
    while (queue.length) {
      tuple = queue.shift();
      [node, hDepth] = tuple;

      // organize into map
      if (hash[hDepth]) {
        hash[hDepth].push(node.val);
      } else {
        hash[hDepth] = [];
        hash[hDepth].push(node.val);
      }

      // enqueue the children
      if (node.left) {
        queue.push([node.left, hDepth - 1]);
      }
      if (node.right) {
        queue.push([node.right, hDepth + 1]);
      }
    }
  }

  return Object.keys(hash)
    .sort((a, b) => a - b)
    .map(key => hash[key]);
};
