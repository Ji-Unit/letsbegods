/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  let closest = root.val;

  // traverse
  while (root !== null) {
    // find the smaller value between curr node and previous nodes and make that the closest value
    closest =
      Math.abs(target - root.val) < Math.abs(target - closest)
        ? root.val
        : closest;

    // target value finds a node with exactly the same value
    if (closest === target) {
      return target;
    }

    if (root.val < target) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return closest;
};
