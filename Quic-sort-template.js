// クイックソートの説明
// LeetCodeの問題文例
// 問題文: 与えられた整数の配列を昇順にソートしてください
// 例
// JavaScriptの回答コード例

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// 使用例
let array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array)); // [1, 1, 2, 3, 6, 8, 10]
// コードの分かりやすい解説
// 基本ケースの確認:
// 配列の長さが1以下の場合、そのまま返します。これは再帰の終了条件です。
// ピボットの選択:
// 配列の中央の要素をピボットとして選びます。
// 分割:
// 配列をピボットより小さい要素の配列（left）と、ピボットより大きい要素の配列（right）に分けます。
// 再帰呼び出し:
// leftとrightを再帰的にソートし、ピボットを中央に挟んで結合します。
// 考えられる使用シチュエーション
// 大量のデータを効率的にソートしたい場合。
// 配列の要素がランダムに分布している場合。
// メモリ使用量を最小限に抑えたい場合。
// アルゴリズムの時間複雑度と空間複雑度
// 時間複雑度:
// 平均ケース: O(n log n)
// 最悪ケース: O(n^2)（すでにソートされている場合など）
// 空間複雑度:
// O(log n)（再帰呼び出しのスタックスペース）
// クイックソートは、一般的に高速で効率的なソートアルゴリズムとして広く使用されています。特に、平均ケースでの時間複雑度がO(n log n)であるため、大規模なデータセットのソートに適しています。