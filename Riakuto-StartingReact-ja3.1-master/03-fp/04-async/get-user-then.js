import fetch from 'node-fetch';

const getUser = (userId) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(   // Promiseオブジェクトを使ってjson()メソッドをthen()で受け止める。
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} Error`);
      } else {
        return response.json();
      }
    },
  );

console.log('-- Start --');

getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('-- Completed --');
  });
