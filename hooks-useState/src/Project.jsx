import { useState } from "react";

const Project = () => {
  const [count, setCount] = useState(0);

  const handleCountInc = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert(`can't go beyond this count`);
    }
  };

  const handleCountDec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("no negative count");
    }
  };
  return (
    <>
      <button onClick={handleCountInc}>Count + 1</button>
      <h2>{count}</h2>
      <button onClick={handleCountDec}>Count - 1</button>
    </>
  );
};
export default Project;
