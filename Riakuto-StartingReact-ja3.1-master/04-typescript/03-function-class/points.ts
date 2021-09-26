class Point {
  x: number = 0;
  y: number = 0;
}

const pointA = new Point();
const pointB: Point = { x: 2, y: 4 };
/*
TypeScriptではクラスを定義すると実際には2つの宣言が同時に実行される。
1つはクラスインスタンスのインターフェース型宣言。
もう1つはコンストラクタ関数の宣言。
Pointは型のコンテキスト(文脈)においてはインターフェースとして扱われる。
一方で通常のコンテキストではコンストラクタ関数として扱われる。
*/
interface Point3d extends Point {
  z: number;
}

const pointC: Point3d = { x: 5, y: 5, z: 10 };

console.log(pointA);
console.log(pointB);
console.log(pointC);
