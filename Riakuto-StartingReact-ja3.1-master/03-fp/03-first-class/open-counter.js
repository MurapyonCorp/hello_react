// グローバル変数はどこからでも任意に書き換えができてしまう。そのため丸ごと関数の中に入れてしまう。
const counter = () => {
  let count = 0;

  const increment = () => {
    return count += 1;
  };
};