import { useState } from "react";

const App = () => {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);

  const addFoodHandler = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  };

  const removeHandler = (index) => {
    setFoods(foods.filter((_, i) => i !== index))
    
  };
  return (
    <>
      <h1>Updating the array...</h1>
      <div>
        <h2>List of Foods</h2>
        <ul>
          {foods.map((food, index) => {
            return (
              <li key={index} onClick={() => removeHandler(index)}>
                {food}
              </li>
            );
          })}
        </ul>
      </div>
      <input type="text" placeholder="enter food name" id="foodInput" />
      <button onClick={addFoodHandler}>Add</button>
    </>
  );
};
export default App;
