var inorderTraversal = function(root, values) {
	if (!root) return [];
	if (!values) {
		values = [];
	}
	inorderTraversal(root.left, values);
	values.push(root.val);
	inorderTraversal(root.right, values);
	return values;
};
