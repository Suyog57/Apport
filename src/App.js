import { React, useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState(0);

  const increase = () => {
    if (val < 1000) {
      setVal((val) => val + 1);
    }
  };

  const decrease = () => {
    if (val > 0) {
      setVal((val) => val - 1);
    }
  };
  return (
    <div className="App">
      {
        <button className="btn1" onClick={decrease}>
          -
        </button>
      }
      {<p className="op">{val}</p>}
      {
        <button className="btn2" onClick={increase}>
          +
        </button>
      }
    </div>
  );
}
