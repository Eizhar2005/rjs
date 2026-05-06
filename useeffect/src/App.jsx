import React, { use, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);

  const [b, setB] = useState(0);

  function aChanging() {
    console.log("a changing");
  }
  function bChanging() {
    console.log("b changing");
  }

  useEffect(() => {
    aChanging();
  }, [a]); // [a] => componentDidUpdate means run when a changes

  useEffect(() => {
    bChanging();
  }); // no dependency array => componentDidUpdate means run when any state changes




  // [] => componentDidMount means only run once when the component is mounted
  return (
    <div>
      <h1>A: {a}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A click
      </button>
      <h1>B: {b}</h1>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        B click
      </button>
    </div>
  );
};

export default App;
