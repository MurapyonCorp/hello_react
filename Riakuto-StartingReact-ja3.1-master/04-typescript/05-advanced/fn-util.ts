const f1 = (a: number, b: string) => { console.log(a, b); };
const f2 = () => ({ x: 'hello', y: true });

// typeof f1(typeof f2)の引数の型を抽出し、タプル型で返す
type P1 = Parameters<typeof f1>;
type P2 = Parameters<typeof f2>;
// typeof f1(typeof f2)の戻り値の型を返す
type R1 = ReturnType<typeof f1>;
type R2 = ReturnType<typeof f2>;
