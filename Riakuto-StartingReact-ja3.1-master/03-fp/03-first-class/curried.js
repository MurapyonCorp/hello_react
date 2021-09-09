{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4));
}
// curried
// nを引数に取り、その戻り値でmを引数にとっている。さらにn,mの積を返す。
{
  const withMultiple = (n) => {
    return (m) => n * m;
  };
  // withMultipleがnを引数にとった後、mを引数にとり、n*mを返すため実行時にはカッコが2つ必要になる。
  console.log(withMultiple(2)(4));
}
// curried with double arrow
{
  const withMultiple = (n) => (m) => n * m;
  console.log(withMultiple(2)(4));
}
