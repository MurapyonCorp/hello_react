type A = { foo: number };
type B = { bar: string };
type C = {
  foo?: number;
  baz: boolean;
};

type AnB = A & B;   //=>  {foo: number, bar: string}
type AnC = A & C;
/*
=> {foo: number, baz: boolean}
同じ型で必須と省略可能が交差したら必須が優先される。
もしも同じプロパティで型の共通点がない場合はnever型が返される。
*/
type CnAorB = C & (A | B);
