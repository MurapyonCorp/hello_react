import React from 'react';

const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    console.log(inputRef.current);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* ref属性の中に任意のオブジェクトを設定しておくと、組み込みコンポーネントがリアルDOMとしてレンダリングされた際に、
      渡されたオブジェクトの.currentプロパティにそのリアルDOMへの参照値を入れてくれるのね。
      だからhandleClick()関数の中で.focus()メソッドが実行できてる実体は、レンダリングされたHTMLDOMのHTMLInputElementオブジェクトになる */}
      <input type="button" value="Focus" onClick={handleClick}/>
    </div>
  );
};

export default TextInput;
