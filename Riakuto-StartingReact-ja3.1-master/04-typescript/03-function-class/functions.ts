// function declaration statement         --> add()の宣言文
{
  function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4));
}

// function keyword expression            --> add()のfunctionキーワードによる関数式
{
  const add = function (n: number, m: number): number {
    return n + m;
  };
  console.log(add(5, 7));
}

// arrow function expression              --> add()のアロー関数式
{
  const add = (n: number, m: number): number => n + m;
  const hello = (): void => {
    console.log('Hello!');
  };

  console.log(add(8, 1));
  hello();
}
