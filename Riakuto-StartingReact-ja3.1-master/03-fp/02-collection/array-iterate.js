const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map()・・・対象の配列の要素をひとつひとつ任意に加工した新しい配列を返す
console.log(arr.map((n) => n * 2));
// filter()・・・与えた条件に適合する要素だけを抽出した新しい配列を返す
console.log(arr.filter((n) => n % 3 === 0));
// find()・・・与えた条件に適合した最初の要素を返す。見つからなかった場合はundefinedを返す。
console.log(arr.find((n) => n > 4));
// findIndex()・・・与えた条件に適合した最初の要素のインデックスを返す。見つからなかった場合は-1を返す
console.log(arr.findIndex((n) => n > 4));
// every()・・・「与えた条件をすべての要素が満たすか」を真偽値で返す
console.log(arr.every((n) => n !== 0));
// some()・・・「与えた条件を満たす要素がひとつでもあるか」を真偽値で返す
console.log(arr.some((n) => n >= 10));
