type Flatten<T> = T extends Array<infer U> ? U : T;
// inferキーワード：条件付き型における型のマッチングで、マッチング中に取得した型を出力にも利用可能。

const num = 5;
const arr = [3, 6, 9];
type A = Flatten<typeof arr>;   //=> number
type N = Flatten<typeof num>;   //=> number
