/* 
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.


Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/
//Binary
var countNegatives = function (grid) {
    let result = 0;
    const cols = grid[0].length;
    for (const row of grid) {
        let left = 0;
        let right = cols - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (row[mid] < 0) {
                result += right - mid + 1;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return result;
};

//Linear
// var countNegatives = function(grid){
//     let result = 0
//     for(let row = 0; row < grid.length; row++){
//         for(let col = 0; col < grid[row].length; col++){
//             if(grid[row][col] < 0){
//                 result += 1
//             }
//         }
//     }
//     return result
// }
