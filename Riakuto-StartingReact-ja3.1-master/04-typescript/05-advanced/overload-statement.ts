class Brooch {
  pentagram = 'Silver Crystal';
}

type Compact = {
  silverCrystal: boolean;
};

class CosmicCompact implements Compact {
  silverCrystal = true;
  cosmicPower = true;
}

class CrisisCompact implements Compact {
  silverCrystal = true;
  moonChalice = true;
}

function transform(): void;
function transform(item: Brooch): void;
// 引数の型の指定はクラスだけでなくimplements元のオブジェクトの型(インターフェース)でも指定可能
function transform(item: Compact): void;
// 引数として与えた変身アイテムによって返信パターンが変化する。
function transform(item?: Brooch | Compact): void {
  if (item instanceof Brooch) {
    console.log('Moon crystal power💎, make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power💖, make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis🏆, make up!');
  } else if (!item) {
    console.log('Moon prisim power🌙, make up!');
  } else {
    console.log('Item is fake...😖');
  }
  /*
  構造的サブタイピング(Structural Subtyping)
  ---> 型の構造さえ合致していれば型チェックをパスする。またその型を拡張したサブタイプも型の比較では真となる。
  今回の例で示すと
  pentagram: stringさえ備えていればBrooch型にイコール、silverCrystal: booleanプロパティさえ備えていればCompact型にイコールとコンパイラに判断される。
  */
}

transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());
