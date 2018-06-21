/*
	Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) {
    return [];
  }

  const res = [];
  let queue = [root];
  let shouldReverse = false;
  let current;
  let nextQueue;
  let temp;
  while (queue.length) {
    nextQueue = [];
    temp = [];
    while (queue.length) {
      current = queue.shift();
      temp.push(current.val);
      if (current.left) {
        nextQueue.push(current.left);
      }
      if (current.right) {
        nextQueue.push(current.right);
      }
    }
    if (shouldReverse) {
      temp.reverse();
    }
    shouldReverse = !shouldReverse;
    res.push(temp);
    queue = nextQueue;
  }
  return res;
};
