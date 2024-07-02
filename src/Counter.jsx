import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(4);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
    </>
  );
}

export default Counter;
