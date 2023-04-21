import React, { useState } from "react";

function CountTextBt2() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Số từ đã nhập: {count}</p>
      <input type="text" onChange={handleCount} />
    </div>
  );
}

export default CountTextBt2;
