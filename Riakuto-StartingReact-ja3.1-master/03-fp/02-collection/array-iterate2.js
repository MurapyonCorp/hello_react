const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((n, m) => n + m));
// reduceは引数に着目してみる。第2引数mにはarr要素の値が順番に代入される。第１引数nには前回の関数の実行結果が入ってくる。
// そうして最終的にreduce()は最後に実行された値のみ返す。
console.log(arr.sort((n, m) => n > m ? -1 : 1));
