const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
} as const;
/*
as constを消すと型変数PermsNumが数値リテラル型ではなくただのnumber型になる。
as constの構文はConst Assertionsといい、定数としての型注釈を付与するもの。index-access.tsのように一つずつ書かなくともまとめることができる。
*/

type ValueOf<T> = T[keyof T];
type PermsNum = ValueOf<typeof permissions>;  // 1 | 2 | 4
