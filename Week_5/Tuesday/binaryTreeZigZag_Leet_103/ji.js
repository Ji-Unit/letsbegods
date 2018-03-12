let result;
var zigzagLevelOrder = function(root) {
    result = [];
    if(!root) return [];
    traverse(root,0);
    return result;
};


function traverse(node,level) {
    if(!result[level]) result.push([]);
    if(!node) return;
    if(level % 2 !== 0) {
     result[level].unshift(node.val);
    }else result[level].push(node.val);

   if(node.left) traverse(node.left,level+1);
   if(node.right) traverse(node.right,level+1);
}