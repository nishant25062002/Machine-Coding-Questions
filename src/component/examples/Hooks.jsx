import React from "react";
import { useLocalStorage } from "../../hooks";

const Hooks = () => {
  const [counter, setCounter] = useLocalStorage("counter", 0);

  console.log("counter", counter);

  return (
    <div className="faqs">
      <h1>Hooks</h1>
      <button onClick={() => setCounter((prev) => parseInt(prev) + 1)}>
        Increase counter
      </button>
    </div>
  );
};

export default Hooks;
