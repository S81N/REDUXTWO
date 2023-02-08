import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const counter = useSelector((data) => data.counter);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch({ type: "PLUS" });
  };

  const handleMinus = () => {
    dispatch({ type: "MINUS" });
  };

  const addByValue = () => {
    dispatch({ type: "VALUE", payload: 10 });
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={handlePlus} style={{ border: "1px solid black" }}>
        Plus
      </button>
      <button
        onClick={handleMinus}
        style={{ border: "1px solid black", marginLeft: "5px" }}
      >
        Minus
      </button>

      <button
        onClick={addByValue}
        style={{ border: "1px solid black", marginLeft: "5px" }}
      >
        Add by 10
      </button>
    </div>
  );
}
