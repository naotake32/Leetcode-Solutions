
// Code
// Accepted
// Accepted
// Testcase
// Testcase
// Test Result
// 74. Search a 2D Matrix
// Solved
// Medium
// Topics
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2M
// Submissions
// 3.9M
// Acceptance Rate
// 51.0%



//O(m*n) solution


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let flag = false;
    let left = 0;
    let right = 0;

    for(i=0;i < matrix.length; i++) {
        right = matrix[i].length
        if(target === matrix[i][0]) {
            flag = true
        }
        if(target > matrix[i][0]) {
            for(j=0;j < matrix[i].length; j++) {
                if(matrix[i][j] < target) {
                    left ++
                } else if(matrix[i][j] > target) {
                    right --
                } else {
                    return true
                }
            }
        }
    }
    return flag
};

//O(log(m*n)) solution
//2次元配列を1次元配列に変換して、二分探索を行う方法


var searchMatrix = function(matrix, target) {
    // 行列が存在しない、または空の時にfalseを返す
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    // 行数と列数を取得
    let m = matrix.length;      // 行の数
    let n = matrix[0].length;   // 列の数
    let left = 0;               // 1次元配列における左端のインデックス
    let right = m * n - 1;      // 1次元配列における右端のインデックス
    
    // 二分探索ループ
    while (left <= right) {
        // 中央のインデックスを計算
        let mid = Math.floor((left + right) / 2);
        
        // 中央の値を行列の座標に変換して取得
        // mid / nは、midをnで割って行数を取得している。
        // nは1行の中に何個要素があるかを示しているので、これでmidを割ると行数が取得できる。
        // mid % nは列数を取得している。なぜなら、n(1行内の要素数)で割ったあまりを出すと、あまりの分だけ左にずれた位置になるから。
        let midValue = matrix[Math.floor(mid / n)][mid % n];
        
        // 中央の値がターゲットと一致する場合、trueを返す
        if (midValue === target) {
            return true;
        } 
        // 中央の値がターゲットより小さい場合、探索範囲を右側に変更
        else if (midValue < target) {
            left = mid + 1;
        } 
        // 中央の値がターゲットより大きい場合、探索範囲を左側に変更
        else {
            right = mid - 1;
        }
    }
    
    // ターゲットが見つからなかった場合、falseを返す
    return false;
};