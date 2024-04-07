// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


// Seen this question in a real interview before?
// 1/4
// Yes
// No
// Accepted
// 3.4M
// Submissions
// 5.2M
// Acceptance Rate
// 64.4%




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const SortedS =s.split('').sort().join('');
    const SortedT =t.split('').sort().join('');
    
    if(SortedS === SortedT) {
        return true;
    }else{
        return false;
    }
};