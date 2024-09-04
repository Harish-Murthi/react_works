import { useState } from "react";

export default function Counter() {
  let [count, setcount] = useState(0);
  let [incrementby, setincrement] = useState(1);

  function increment() {
    setcount(count + incrementby);
  }
  function decrement() {
    setcount(count - incrementby);
  }
  function incrementone() {
    setincrement(incrementby + 1);
  }
  function decrementone() {
    setincrement(incrementby - 1);
  }

  return (
    <div>
      {" "}
      <h1>Count value is:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>{" "}
      <h1>we are increment the value:{incrementby}</h1>
      <button onClick={incrementone}>increment</button>
      <button onClick={decrementone}>decrement</button>
    </div>
  );
}
