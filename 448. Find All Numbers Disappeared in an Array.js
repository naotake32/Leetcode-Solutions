// 448. Find All Numbers Disappeared in an Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.


// Seen this question in a real interview before?
// 1/4
// Yes
// No
// Accepted
// 855.7K
// Submissions
// 1.4M
// Acceptance Rate
// 60.8%

// Check if each number exists in the nums array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = []
    const n = nums.length;
    for(let i = 1;i <= n; i ++){
        if(!nums.includes(i)){
            result.push(i);
        }
    }
    return result;
};