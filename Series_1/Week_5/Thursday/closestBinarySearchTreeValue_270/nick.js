/*
	Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

// Iterative
const closestValue = (root, target) => {
  let closest = root;
  while (root) {
    if (Math.abs(target - root.val) < Math.abs(target - closest.val)) {
      closest = root;
    } else if (target === closest.val) {
      return closest.val;
    } else {
      closest = closest;
    }
    root = root.val < target ? root.right : root.left;
  }
  return closest.val;
};

// Recursive
const closestValue = (root, target) => {
  let rootVal = root.val;
  let childNode = target < root.val ? root.left : root.right;
  if (!childNode) {
    return root;
  }
  let childVal = closestValue(childNode, target);
  return Math.abs(rootVal - target) < Math.abs(childVal - target) ? rootVal : childVal;
};
