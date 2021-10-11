console.log(typeof 100);    //=> 'number'
// typeof演算子：通常の式では渡された値の型の名前を文字列として返す。型のコンテキストを使うと変数から型を抽出してくれる。

const arr = [1, 2, 3];
console.log(typeof arr);    //=> 'object'

type NumArr = typeof arr;

const val: NumArr = [4, 5, 6];
// const val2: NumArr = ['foo', 'bar', 'baz'];  /* compile error */
