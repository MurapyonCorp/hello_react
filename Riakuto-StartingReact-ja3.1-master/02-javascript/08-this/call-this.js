const Person = function (name) {
  this.name = name;

  return this;
};

const kanae = Person.call({ gender: 'f' }, 'Kanae');
console.log(kanae);

// (1) new演算子をつけて呼び出したとき : 新規生成されるオブジェクト
const dump = function() { console.log('`this` is', this); };
const obj = new dump();
console.log(obj)
console.log(dump.prototype)
console.log(obj !== dump.prototype)

// (2) メソッドとして実行されたとき : その所属するオブジェクト
const foo = {
  name: 'Foo Object',
  dump() {
    console.log(this);
  },
};
foo.dump();