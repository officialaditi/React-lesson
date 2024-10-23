// example of checkbox (bool);

import { useState } from "react";

const Example3 = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = () => {
    setLiked(!liked);
  };
  return (
    <>
      <h2>checkbox:-</h2>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={liked}
        style={{ margin: "30px", width: "30px", height: "30px" }}
      />
      <h2>{liked ? "you liked" : "you have not liked"} this</h2>
    </>
  );
};
export default Example3;

// In this example, the liked state variable holds a boolean.

// When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked.

// The liked variable is used to render the text below the checkbox.
