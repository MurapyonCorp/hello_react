type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

interface Resident {
  name: string;
  age: number;
  species: Species;
}

const isCanine = (resident: Resident): boolean =>
  ['dog', 'fox'].includes(resident.species);

export { Species, Resident, isCanine };

/*
TypeScriptでは同じ名前空間の中に「変数宣言空間(Variable Declaration Space)」と「型宣言空間(Type Declaration Space)」
という2つの宣言空間が存在している。
名前の管理が別々であるため、変数や関数と型で同一の名前を持つことができる。
*/