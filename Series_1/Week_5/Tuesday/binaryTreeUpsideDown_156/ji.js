var upsideDownBinaryTree = function(root) {
    if(!root || !root.left) return root;
    //grab bottom left, keep as head of new tree;
    const head = upsideDownBinaryTree(root.left);
    //root.left is head make head.left -> prevRoot.right
    root.left.left = root.right;
    //root.left is head make head.right -> prevRoot
    root.left.right = root;
    //clear prevRoot children
    root.left = null
    root.right = null;
    return head;
};