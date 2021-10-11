const obj = { a: 1, b: 2, c: 3 };
console.log('a' in obj);                      // true
// in演算子：通常の式では指定した値がオブジェクトのキーとして存在するかを真偽値で返す。
for (const key in obj) { console.log(key); }  // a b c
/*
for...in文ではオブジェクトからインクリメンタルにキーを抽出するのに使われている。
一方で型のコンテキストでは列挙された型の中から各要素の型の値を抜き出してマップ型というものを作る。
*/

type Fig = 'one' | 'two' | 'three';
type FigMap = { [k in Fig]?: number };

const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3,
};
// figMap.four = 4; /* compile error */
