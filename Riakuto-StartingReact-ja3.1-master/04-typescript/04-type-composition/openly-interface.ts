/*
同じプロパティ値を別の型として上書き定義はできない。
その上ほかのプロパティはそのままなので再宣言ではない！
*/
interface User {
  name: string;
}
interface User {
  age: number;
}
interface User {
  species: 'rabbit' | 'bear' | 'fox' | 'dog';
}

const rolley: User = {
  name: 'Rolley Cocker',
  age: 8,
  species: 'dog',
};
console.log(rolley);
