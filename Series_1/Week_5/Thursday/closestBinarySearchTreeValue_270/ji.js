
var closestValue = function(root, target) {
    if(root.val > target) {
        if(root.left) {
         const smaller = closestValue(root.left,target);
         return Math.abs(smaller - target) < Math.abs(root.val-target) ? smaller : root.val;
        }
        return root.val;
    }else {
        if(root.right) {
            const larger = closestValue(root.right,target);
            return Math.abs(larger - target) < Math.abs(root.val-target) ? larger : root.val;
        }
        return root.val;
    }
};