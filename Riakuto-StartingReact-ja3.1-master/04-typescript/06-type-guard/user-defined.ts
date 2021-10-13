/*
◎ユーザー定義の型ガード(User-Defined Type Guard)
  クラスを下敷きにしていないただのオブジェクトではinstanceofの方法は使えないため、
  自前で型を絞り込む仕組みを作る。
*/
type Address = { zipcode: string; town: string };
type User = { username: string; address: Address };

/*
●型述語(Type Predicate)
  関数isUser()の戻り値の型定義があarg is Userとなっている。
  この関数がtrueを返す場合に引数argの型がUserであることがコンパイラに示唆される。
*/
const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    typeof u?.username === 'string' &&
    typeof u?.address?.zipcode === 'string' &&
    typeof u?.address?.town === 'string'
  );
};

const u1: unknown = JSON.parse('{}');
const u2: unknown = JSON.parse('{ "username": "patty", "address": "Maple Town" }');
const u3: unknown = JSON.parse(
  '{ "username": "patty", "address": { "zipcode": "111", "town": "Maple Town" } }',
);

[u1, u2, u3].forEach((u) => {
  if (isUser(u)) {
    console.log(`${u.username} lives in ${u.address.town}`);
  } else {
    console.log("It's not User");
//  console.log(`${u.username} lives in ${u.address.town}`);  /* compile error */
  }
})
