
// 問題例: 配列の要素の出現回数をカウント
// 問題: 整数の配列 nums が与えられたとき、各数値の出現回数をカウントし、ハッシュマップとして返してください。

// 入力例:

// javascript
// コードをコピーする
// nums = [1, 2, 2, 3, 3, 3];
// 出力例:

// javascript
// コードをコピーする
// {
//   1: 1,
//   2: 2,
//   3: 3
// }
// 解き方
// ハッシュマップを使って、各数値が出現した回数を記録していきます。
function countOccurrences(nums) {
    const mymap = new Map();

    for(let num of nums) {
        if(mymap.has(num)){
            //countMap.get(num)はnumの値を返す。
            //配列内の要素numはキーなので、それを引き数にしてgetメソッドを使うことで、そのキーに対応する値を取得できる。
            mymap.set(num, mymap.get(num + 1));
        }else {
            //初めて出てくる数字の場合は、キーに数字、値に1をセット
            mymap.set(num, 1);
        }
    }
    return mymap;
}