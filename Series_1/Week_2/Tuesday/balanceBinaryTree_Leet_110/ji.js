var traverse = function(node) {
    if (node === null) return 0;
    var left = traverse(node.left);
    var right = traverse(node.right);
    if (left === false || right === false) {
        return false;
    }
    var diff = left - right;
    if (diff > 1 || diff < -1) {
        return false;
    } else if (diff > 0) {
        return 1 + left;
    } else {
        return 1 + right;
    }
};

var isBalanced = function(root) {
    if (root === null) return true;
    if (traverse(root) === false) return false;
    return true;
};
