// counter (number)
//In this example, the count state variable holds a number. Clicking the button increments it.
// simpler counter that increase and decrease count number.

import { useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const updateHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={updateHandler}>Increase count by 1</button>
        <button style={{margin: '10px'}} onClick={decreaseHandler}>Decrease count by 1</button>
      </div>
    </>
  );
};
export default Example1;
