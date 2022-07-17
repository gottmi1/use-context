import logo from "./logo.svg";
import "./App.css";
import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";
import Exam3 from "./components/Exam3";

function App() {
  return (
    <div className="App">
      <Exam1 />
      <p>컨슈머 사용</p>
      {/* 컨슈머 사용 */}
      <hr />
      <Exam2 />
      <p>클래스 형 this.context 사용</p>
      {/* 클래스형, contextType, this.context 사용 */}
      <hr />
      <Exam3 />
      <p>useContext 사용</p>
      {/* useContext 사용. 가장 편하고 최신 것이기 떄문에 사용이 권장됨. */}
    </div>
  );
}

export default App;
