/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }


 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const recurseHelper = (node, res) => {
  if (node !== null) {
    if (node.left !== null) {
      recurseHelper(node.left, res);
    }
    res.push(node.val);
    if (node.right !== null) {
      recurseHelper(node.right, res);
    }
  }
}

const inorderTraversalRecurse = (node) => {
  const res = [];
  recurseHelper(node, res);
  return res;
};

const inorderTraversalIterative = (node) => {
  // use 2 array, res and stack to keep track of order
  const res = [];
  const stack = [];
  let current = node;

  while (current !== null || stack.length) {
    // go all the way left first
    while (current !== null) {
      res.push(current.val);
      current = current.left;
    }
    // we've hit a bottom node with no left
    // add that to res
    current = stack.pop();
    res.push(current.val);
    // check the right hand nodes now
    current = current.right;
  }
  return res;
};

