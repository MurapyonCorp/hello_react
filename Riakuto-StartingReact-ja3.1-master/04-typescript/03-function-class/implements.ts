interface Shape {
  readonly name: string;
  getArea: () => number;
}

interface Quadrangle {
  sideA: number;
  sideB?: number;
  sideC?: number;
  sideD?: number;
}

// インターフェースでも関数の型を定義すれば、それがメンバーメソッドになる
class Rectangle implements Shape, Quadrangle {
  readonly name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
// 定義にアロー構文を使っているが、getArea():numberでもOK
  getArea = (): number => this.sideA * this.sideB;
}

const rect = new Rectangle(6, 5);
console.log(rect.getArea());
