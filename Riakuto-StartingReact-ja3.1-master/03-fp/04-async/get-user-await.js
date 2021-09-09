import fetch from 'node-fetch';

const getUser = async (userId) => {                           // 関数宣言時にasyncキーワードを付与することでその関数は非同期関数となる。
  // 返される値がPromise.resolve()によってラップされたものになる。
  const response = await fetch(                               // 非同期関数の中では他の非同期関数をawait演算子をつけて呼び出しが可能。
    // await式により非同期関数を実行するとPromiseがresolveかrejectされるまで待ってくれる。
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error(`${response.status} Error`);
  }

  return response.json();                                     // resolveされたらawait式はラップしていたPromiseから値を抽出して返す。
};

console.log('-- Start --');

const main = async () => {
  try {
    const user = await getUser(2);
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('-- Completed --');
  }
};

main();
