// 100. Same Tree



// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    let arr1 = []
    let arr2 = []

    function dfs(node, arr){

        if(node == null){
            arr.push(null)
            return
        }

        arr.push(node.val)

        dfs(node.left, arr)
        dfs(node.right, arr)

        return arr
    }

    dfs(p, arr1)
    dfs(q, arr2)

    if(arr1.length !== arr2.length){
        return false        
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false
        }
    }

    return true
};