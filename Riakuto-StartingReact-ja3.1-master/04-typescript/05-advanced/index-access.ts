const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

type PermsChar = keyof typeof permissions;        //=> 'r' | 'w' | 'x'
type PermsNum = typeof permissions[PermsChar];    //=> 1 | 2 | 4
/*
通常の式でも[]演算子はobj[key]のようにキーを渡すと該当するプロパティの値にアクセスができる。
型コンテキストでも同様にキーの型を渡すとプロパティの値の型が返ってくる。
意味としてはtypeof (permissions[PermsChar])ではなく(typeof permissions [PermsChar])である。
*/
