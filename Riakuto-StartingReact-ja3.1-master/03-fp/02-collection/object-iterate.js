const user = {
  id: 3,
  name: 'Bobby Kumanov',
  username: 'bobby',
  email: 'bobby@maple.town',
};

console.log(Object.keys(user));   //プロパティのキーリストを配列で取得
console.log(Object.values(user)); //プロパティ値のリストを配列で取得
console.log(Object.entries(user));  //キーと値が対になった2次元配列を返す。
