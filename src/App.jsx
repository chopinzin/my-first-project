import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function somar() {
    setCount(count + 1);
  }
  function diminuir() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function resetar() {
    setCount(0);
  }
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counteroutput">{count}</span>
      <div className="btncontainer">
        <button onClick={() => somar()} className="controlbtn">
          +
        </button>
        <button onClick={() => diminuir()} className="controlbtn">
          -
        </button>
        <button onClick={() => resetar()} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
