class Rectangle {
  readonly name = 'rectangle';    // プロパティ初期化子(Property Initializer)
  // readonlyでrectangleというメンバー変数を変更不可にする
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}

const rect = new Rectangle(10, 20);
console.log(rect.getArea());
