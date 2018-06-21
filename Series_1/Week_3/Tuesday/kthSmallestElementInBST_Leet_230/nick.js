/*
	Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Strategy: 
find the smallest first
then continue upward and decrease count
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = k;
  let res;
  const findNthSmallest = node => {
    // find smallest by going all the way left;
    if (node.left) {
      findNthSmallest(node.left);
    }
    count--;
    if (count === 0) {
      res = node.val;
    } else if (node.right) {
      findNthSmallest(node.right);
    }
  };

  findNthSmallest(root);
  return res || -1;
};
