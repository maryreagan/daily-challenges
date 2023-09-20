/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

var searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = matrix[0].length
    let left = 0
    let right = rows * cols - 1
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        const midValue = matrix[Math.floor(mid/cols)][mid % cols]
        if(midValue === target){
            return true
        } else if (midValue < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))