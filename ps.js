/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const q = [root, root];
    while(q.length > 0){
        const [node1, node2] = [q.shift(), q.shift()];
        if(node1 === null && node2 === null) continue;
        if(node1 === null || node2 === null) return false;
        if(node1.val !== node2.val) return false;
        
        q.push(node1.left);
        q.push(node2.right);
        q.push(node1.right);
        q.push(node2.left);
    }
    return true;
};
