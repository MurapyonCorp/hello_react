const merge = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});
// ここでのextendsは関数override()の第2引数obj2の型を定義している型引数Uが第1引数の型obj1の型Tと同じか拡張したものでないといけないことを示唆している。

override({ a: 1 }, { a: 24, b: 8 });
// override({ a: 2 }, { x: 73 });  /* compile error */
