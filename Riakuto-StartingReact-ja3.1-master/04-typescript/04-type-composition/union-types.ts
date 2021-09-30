type A = {
  foo: number;
  bar?: string;
};
type B = { foo: string };
type C = { bar: string };
type D = { baz: boolean };

type AorB = A | B;
/*
type A = {
  foo: number;
  bar?: string;
};
もしくは
type B = { foo: string };
のどちらかが適用される。
*/
type AorC = A | C;
type AorD = A | D;
