// 451. Sort Characters By Frequency
// Medium
// 6.8K
// 229
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.
// Accepted
// 513.5K
// Submissions
// 731.9K
// Acceptance Rate
// 70.2%


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {};
    for(char of s) {
        if(freq[char]){
            freq[char]++
        } else {
            freq[char] = 1;
        }
    }
    console.log(freq);
    let newArr =  Object.entries(freq);
    console.log(newArr);
    let Arr = newArr.map(([char,freqNum])=>{
       return new Array(freqNum).fill(char).join('');    
    })
    Arr.sort((a,b) => b.length - a.length);
    s = Arr.join("");
    return s;
};