const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 内部にミュータブルな変数が生じないこと、反復処理のメソッドとスタイルが共通していてメソッドチェーンでつなげられるforEachメソッドの使用をおすすめ
arr.forEach((n) => {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  }
});

for (let n of arr) {
  if (n % 2 !== 0) {
    console.log(`${n} is odd`);
  }
}
// ただ基本的に上記は使わずmapやfindメソッドを使う方がよく、これらで十分である。forEachは例外的に使用しよう。