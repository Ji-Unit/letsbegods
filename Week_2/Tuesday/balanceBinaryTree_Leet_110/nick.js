/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // Need to find depth of root node's left and right nodes
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const getDepth = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(getDepth(node.left), getDepth(node.right));
};

const isBalanced = function(root) {
  // check if root is null
  if (root === null) {
    return true;
  }

  if (Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;
};