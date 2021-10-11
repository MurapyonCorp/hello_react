type Animal = 'cat' | 'dog' | 'rabbit';
type AnimalNote = Record<Animal, string>;   // Animalの要素をキーとしプロパティ値の型をstringとしたオブジェクトの型を作成

const animalKanji: AnimalNote = {
  cat: '猫',
  dog: '犬',
  rabbit: '兎',
};
