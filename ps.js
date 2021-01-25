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
var isValidBST = function(root) {
    
    const dfs = (currNode, lowLimit, highLimit) => {
        
        if(currNode === null) return true;
        
        if(currNode.val<=lowLimit || highLimit<=currNode.val){
            return false;
        }
        
        return dfs(currNode.right, currNode.val, highLimit) && dfs(currNode.left, lowLimit, currNode.val);
        
        
    }
    return dfs(root, -Infinity, Infinity);
    
    
};
