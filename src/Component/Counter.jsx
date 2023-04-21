import React, { useState } from "react";

function Counter() {
  const [count, setCout] = useState(0);

  function increase() {
    setCout(count + 1);
  }

  function decrease() {
    setCout(count - 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default Counter;
