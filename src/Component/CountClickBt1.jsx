import React, { useState } from "react";

function CountClickBt1() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increase}>click!!!</button>

      <p>Số lần bạn đã click: {count}</p>
    </div>
  );
}

export default CountClickBt1;
