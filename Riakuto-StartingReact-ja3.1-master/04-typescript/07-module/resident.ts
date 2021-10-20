/*
● 型のみのエクスポート(Type-Only Exports)
  最初からあえて型だけをエクスポートすることができる構文。
*/
type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

class Resident {
  name = '';
  age = 0;
  species: Species | null = null;
}

export { Species, Resident };
