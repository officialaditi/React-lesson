// example 2 using text field (string);

import { useState } from "react";

const Example2 = () => {
  const [name, setName] = useState("enter anything");
  
  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <input value={name} style={{ marginLeft: "20px", fontSize: '20px' }} onChange={handleChange} />
      <h2>{`you have enter this:- ${name}`}</h2>
      <button onClick={() => setName('enter name')} >Change</button>
    </>
  );
};
export default Example2;

// In this example, the (name) state variable holds a string.

// When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. 

// This allows you to display the current text below.
