const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
};

type PermsChar = keyof typeof permissions; // 'r' | 'w' | 'x'
// keyof演算子：通常の式では使えない。型コンテキストのみで用いられる演算子。オブジェクトの型からキーを抜き出す。
const readable: PermsChar = 'r';
// const writable: PermsChar = 'z';  /* compile error */
