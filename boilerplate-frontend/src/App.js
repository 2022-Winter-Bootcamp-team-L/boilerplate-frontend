import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import OddEvenResult from "./components/oddeven.js";
function App() {
  const [count, setCount] = useState(0);
  const [oddeven, setoddeven] = useState("짝수");
  return (
    <div className="App">
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setoddeven();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <OddEvenResult count={count} oddeven={oddeven} setoddeven={setoddeven} />
    </div>
  );
}

export default App;
