import React from 'react';
/*
1行目が必要になる理由はtsconfig.jsonでjsxオプションをreactに設定している場合、JSXの記述はReact.createElement(...)のように変換されるから。
createElementメソッドの上位モジュールであるReactがインポートされてないと変換後、参照エラーになってしまうという警告。
*/
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
