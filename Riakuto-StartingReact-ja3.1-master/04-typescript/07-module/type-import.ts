/*
● 型のみのインポート(Type-Only Imports)
  同じ名前でエクスポートされた型とオブジェクトから型のみをインポートする構文。
*/
import type { Resident } from './resident';

// const resident = new Resident();  /* compile error */
const patty: Resident = {
  name: 'Patty Rabbit',
  age: 8,
  species: 'rabbit',
};
/*
Residentクラスを型だけエクスポートすると、インポート側ではコンストラクタが使えずインターフェースだけ使用可能。
逆に型だけをインポートしたい場合は
import type { Foo } from 'bar'
のように書く。
*/
console.log(patty);
