// 1046. Last Stone Weight
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1
 

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 667K
// Submissions
// 1M
// Acceptance Rate
// 65.6%


//my solution:

/**
 * @param {number[]} stones
 * @return {number}
 */

function organizeArray (Arr) {
    let biggest = 0;
    let second = 0;
    let n = Arr.length-1

    while(Arr.length > 1) {
        Arr.sort((a, b) => a - b);  // 配列を昇順にソート
        biggest = Arr.pop();
        second = Arr.pop();
        
        if (biggest !== second) {
            let newElement = biggest - second;
            Arr.push(newElement);
        }
    }
    // 最後に残った石があればその重さ、なければ0を返す
    return Arr.length === 1 ? Arr[0] : 0;
}
var lastStoneWeight = function(stones) {
    let sortedArray = stones.sort((a, b) => a - b);
    return organizeArray(sortedArray);
};


//chatGPT solution

/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    // 配列を降順にソート（最大の石が先頭に来る）
    stones.sort((a, b) => b - a);

    // 配列に石が1個以上ある限りループ
    while (stones.length > 1) {
        // 最大の石2つを取り出す
        let biggest = stones.shift();  // 最大の石
        let second = stones.shift();   // 次に重い石

        // もし2つの石が同じなら両方破壊されるので何もしない
        if (biggest !== second) {
            // 石の重さが違う場合はその差を新しい石として追加
            let newStone = biggest - second;
            stones.push(newStone);

            // 新しい石を追加後、再び降順にソート
            stones.sort((a, b) => b - a);
        }
    }

    // 最後に残った石を返す（なければ0を返す）
    return stones.length === 1 ? stones[0] : 0;
};