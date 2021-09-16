const greet = (friend: 'Serval' | 'Caracal' | 'Cheetah') => {
  switch (friend) {
    case 'Serval':
      return `Hello, ${friend}!`;
    case 'Caracal':
      return `Hi, ${friend}!`;
    case 'Cheetah':
      return `Hiya, ${friend}!`;
    default: {
      const check: never = friend;
      /* 
      7，8行目を削除すると変数checkに'Cheetah'が入る。
      しかしnever型のcheckには文字列'Cheetah'は代入不可のためコンパイルできない。
      これによってcase文の漏れを防ぐ。
      */
    }
  }
};

console.log(greet('Serval'));
