// using map() method for array of objects

const ListMap2 = () => {
  const fruits = [
    { id: 1, name: "orange", calories: 95 },
    { id: 2, name: "mango", calories: 45 },
    { id: 3, name: "apple", calories: 105 },
    { id: 4, name: "cherry", calories: 159 },
  ];
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <ul key={fruit.id}>
            <li>{fruit.name}: <b> Calories:- {fruit.calories}</b></li>
          </ul>
        );
      })}
    </div>
  );
};
export default ListMap2;
