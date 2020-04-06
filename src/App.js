import { h } from "preact";
import { useState } from "preact/hooks";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div class="count">
      <p>{count}</p>
      <button class="increment-btn" onClick={increment}>
        Increment
      </button>
      <button class="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
