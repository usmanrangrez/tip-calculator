import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10%");
  const [split, setSplit] = useState(1);
  const [splitTotal, setsplitTotal] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  function handleTipChange(e) {
    let value = e.target.value.replace("%", "");
    if (value.indexOf("%") === -1) {
      value = value + "%";
    }
    setTip(value);
    // calculate();   if we do here it set(x)  is asynch function so we use useEffect hook.
  }
  function handleBillChange(e) {
    setBill(e.target.value);
    // calculate();   if we do here it set(x)  is asynch function so we use useEffect hook.
  }

  function decrement() {
    setSplit((prev) => Math.max(prev - 1, 1));
    // calculate();   if we do here it set(x)  is asynch function so we use useEffect hook.
  }

  function increment() {
    setSplit((prev) => prev + 1);
    // calculate();   if we do here it set(x)  is asynch function so we use useEffect hook.
  }

  function calculate() {
    let percentage = 1 + parseInt(tip) / 100;
    let result = ((bill * percentage) / split).toFixed(2);
    setsplitTotal(result);
  }

  useEffect(() => {
    calculate();
  }, [bill, tip, split]);

  return (
    <>
      <div className="container">
        <div>
          <div className="cont">
            <label htmlFor="bt">Bill Total</label>
            <input
              type="text"
              placeholder={"0.00"}
              id="bt"
              value={bill}
              onChange={handleBillChange}
            />
            <label className="tip" htmlFor="ts">
              Tip
            </label>
            <input
              type="text"
              placeholder={"0.00"}
              id="ts"
              value={tip}
              onChange={handleTipChange}
            />
          </div>
          <div className="summary">
            <div className="split">
              <label>Split</label>
              <div className="split-control">
                <button onClick={decrement}>-</button>
                <span>{split}</span>
                <button onClick={increment}>+</button>
              </div>
            </div>
            <div className="result">
              <label>Split Total</label>
              <span>{splitTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
