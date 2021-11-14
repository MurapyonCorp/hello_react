import Greets from './components/Greets';
import SummaryText from './components/SummaryText';
import TextInput from './components/TextInput';
import './App.css';

// 定義済みのGreetsコンポーネントをJSXで呼んでいる
const App: React.FunctionComponent = () => (
  <div className="App">
    <Greets name="Patty" times={4}>   {/* <-- nameとtimesがprops(末尾参考)に相当する */}
      <span role="img" aria-label="rabbit">🐰</span>
    </Greets>
    <SummaryText>
      &lt;Summary&gt;<br />
      Patty Hope-rabbit, along with her family, arrives in Maple Town,
      a small town inhabited by friendly animals.

      Soon, the Rabbit Family settles in Maple Town as mail carriers and the bitter,
      yet sweet friendship of Patty and Bobby begins to blossom.
    </SummaryText>
    <TextInput />
  </div>
);
/*
◎ propsとは
『Properties(プロパティ)』のの略で、コンポーネントを関数として考えたとき、その引数に相当するもの。
クラスコンポーネントならpropsというメンバー変数として設定されるんだけど、
基本的にはコンポーネントが呼ばれるときに外から与えられる読み取り専用の変数グループをオブジェクトにまとめたもの。
*/

export default App;
