import { useEffect, useState } from "react";

const MyComp = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = ` updating count ${count} ${color}`;
  }, [count, color]);

  const addHandler = () => {
    setCount((c) => c + 1);
  };

  const colorHandler = () => {
    setColor((color) => (color === "green" ? "red" : "green"));
  };
  return (
    <>
      <h1> learning to use an useEffect hook</h1>
      <h2 style={{ color: color }}>Count:- {count}</h2>
      <button onClick={addHandler}>Add</button>
      <button onClick={colorHandler}>Change Color</button>
    </>
  );
};
export default MyComp;
