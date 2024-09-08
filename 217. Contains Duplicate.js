// 217. Contains Duplicate
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 4.3M
// Submissions
// 6.9M
// Acceptance Rate
// 62.2%



// time limit exceeded
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newArray = []
    let flag = false
    for (i=0; i < nums.length; i++) {
        if(newArray.includes(nums[i])){
            flag = true
            return flag
        }
           newArray.push(nums[i]);
    }
    return flag
};

// time complexity O(N^2)



// better solution using sort
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);  // 配列をソートする
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;  // 隣り合う要素が等しければ重複
        }
    }
    return false;  // 重複がない場合
};