// Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

// For example:
// Given a binary tree {1,2,3,4,5},
//     1
//    / \
//   2   3
//  / \
// 4   5
// return the root of the binary tree [4,5,2,#,#,3,1].
//    4
//   / \
//  5   2
//     / \
//    3   1
// confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.

// Hide Company Tags LinkedIn
// Hide Tags Tree
// Show Similar Problems

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// recursive
var upsideDownBinaryTree = function(root) {
  // Drill down to far left child
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  const newHead = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;

  // cut connections
  root.left = root.right = null;
  return newHead;
};

// iterative
var upsideDownBinaryTree = function(root) {
  let curr = root;
  let prev = null;
  let next = null;
  let temp = null;

  while (curr !== null) {
    next = curr.left;
    curr.left = temp;
    temp = curr.right;
    curr.right = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
