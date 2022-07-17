import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Context from "./contexts/Context";

const persons = [
  { id: 0, name: "kim", age: 29 },
  { id: 1, name: "jinwon", age: 27 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={persons}>
      <App />
    </Context.Provider>
    {/* createContext로 만든 컴포넌트로 App을 감싸주면 Proivder를 사용 가능하다. 이제 여기에 넣는 값(persons)들은 하위 컴포넌트들 모두 접근할 수 있음. */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
