// problem

// 704. Binary Search
// Easy
// 9.4K
// 191
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.
// Accepted
// 1.8M
// Submissions
// 3.1M
// Acceptance Rate
// 56.2%

// answer

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let initialIndex = 0;
    let finalIndex = nums.length - 1;
    for(;initialIndex <= finalIndex;){
            let middleIndex = Math.floor(initialIndex + (finalIndex - initialIndex) / 2); 
        if(nums[middleIndex] > target){
            finalIndex = middleIndex - 1;
        }else if(nums[middleIndex] < target){
            initialIndex = middleIndex + 1;
        }   
        if(nums[middleIndex] === target){
            return middleIndex;
        }
    }
        return -1;
};