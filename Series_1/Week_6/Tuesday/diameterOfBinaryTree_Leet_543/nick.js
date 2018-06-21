/*
	Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

const getDepth = (node, max) => {
  // we've hit the leaf node
  if (node === null) {
    return 0;
  }
  const left = getDepth(node.left, max);
  const right = getDepth(node.right, max);
  max.val = Math.max(max.val, left + right + 1);
  return 1 + Math.max(left, right);
};

const diameterOfBinaryTree = root => {
  if (!root) {
    return 0;
  }
  const resObj = {
    val: 0
  };
  getDepth(root, resObj);
  return resObj.val - 1;
};
