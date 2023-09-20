/* 
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.


Constraints:

1 <= n <= 20
1 <= k <= n
*/

var combine = function(n, k) {
    let result = [] //Initializa an array to store the final combinations
    generateCombos(1, n, k, [], result) //Call helper function to generate the combinations
    return result //returm the array of final combinations
};

function generateCombos(start, n, k, combination, result){
    if(k === 0){
        result.push([...combination])//Add a copy of the current combination to the result when k becomes 0 (combination is complete)
        return
    }
    for(let i = start; i <= n; ++i){
        combination.push(i)//Add the current integer to the combination
        generateCombos(i +1, n, k - 1, combination, result) //Recursively generate combinations with the next integers
        combination.pop() //Remove the last added integer to backtrack and try other possibilities 
    }
}
console.log(combine(4, 2))
console.log(combine(1, 1))