const isSucceeded = true;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve('Success');
  } else {
    reject(new Error('Failure'));
  }
});

promise.then((value) => {       // valueにはresolve()で渡したものを受け取っている。
    console.log('1.', value);

    return 'Succees again';
  })
  .then((value) => {            // 14行目のreturnした値がvalueになる。
    console.log('2.', value);
  })
  .catch((error) => {           // 1行目をfalseに書き換えるとreject()に渡したものがcatch()でerrorとして受け取られる。
    console.error('3.', error);
  })
  .finally(() => {              // 結果がどちらにせよfinally()に渡された関数は最後に必ず実行される。
    console.log('4.', 'Completed');
  });

