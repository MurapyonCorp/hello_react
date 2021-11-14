import React from 'react';

type Props = { name: string; times?: number };

/*
Greetsを関数コンポーネントとして型定義するため、React.FunctionComponents<P>インターフェースを適用してる。
このジェネリクスになってるPがpropsの型になるのね。この例ではPropsという型エイリアスで定義してる。
このProps型がJSXでGreetコンポーネントをタグで書くときの属性値と対応してるわけ。
*/
const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_) => (
        <p>Hello, {name}! {children}</p>
      ))}
    </>
  );
};

export default Greets;
