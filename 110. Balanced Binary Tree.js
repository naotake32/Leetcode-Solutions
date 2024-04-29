// 110. Balanced Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given a binary tree, determine if it is 
// height-balanced
// .

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1.5M
// Submissions
// 2.8M
// Acceptance Rate
// 52.0%


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
var isBalanced = function(root) {
    function checkHeight(node) {
        if(node === null) return 0;// Empty tree
        let leftHeight = checkHeight(node.left);// calculate the height of left nodes
        if(leftHeight === -1) return -1;//the case when the left subtree gap is more than 1
        let rightHeight = checkHeight(node.right)
        if(rightHeight === -1) return -1
        console.log("Left height of node with value " + node.val + ": " + leftHeight);
        console.log("Right height of node with value " + node.val + ": " + rightHeight);
        if(Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        return Math.max(leftHeight, rightHeight) + 1 //plus one to calculate the height value
    }

    return checkHeight(root) !== -1;
};