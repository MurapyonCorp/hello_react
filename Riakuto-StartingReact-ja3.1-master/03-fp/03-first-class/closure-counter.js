const counter = () => {
  let count = 0;

  const increment = () => {
    return count += 1;
  };
  // 機能だけ外から使えるように戻り値を外に出す。
  return increment;
};
