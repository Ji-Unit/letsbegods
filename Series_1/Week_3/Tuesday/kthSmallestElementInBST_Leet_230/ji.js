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
let count;
let value;
var kthSmallest = function(root, k) {
    value = null;
    count = k;
    findNthSmallest(root);
    return value;
};

var findNthSmallest = function(root) {
    //find smallest
    if(root.left) findNthSmallest(root.left);
    //go backwards from smallest by rank
    count = count - 1;
    if(count === 0) value = root.val;
    if(root.right) findNthSmallest(root.right);
}