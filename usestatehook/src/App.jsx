import React, { useState } from "react";

const App = () => {
//make counter increase and decrease by 1 when the button is clicked

const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default App;
