const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5));

// カリー化された関数の部分適用
const triple = withMultiple(3);
// tripleを元の関数withMultipleに還元するとmultiply(3, m)になる。
console.log(triple(5));
