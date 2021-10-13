const foo: unknown = '1,2,3,4';

/*
○ 型ガード(Type Guard)
typeofによってstring型だと判断されたブロック内では、変数fooにstringのプロトタイプメソッドである
split()が使える。
このようにあるスコープ内での型を保証するチェックを行う式のことを型ガードという。
*/
if (typeof foo === 'string') {
  console.log(foo.split(','));
}

// console.log(foo.split(','));  /* compile error */
