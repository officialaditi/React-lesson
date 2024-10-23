const ListFilter = () => {
  const fruits = [
    { id: 1, name: "orange", calories: 95 },
    { id: 2, name: "mango", calories: 45 },
    { id: 3, name: "apple", calories: 105 },
    { id: 4, name: "cherry", calories: 159 },
  ];

  const filterList = fruits.filter((fruit) => {
    return fruit.calories < 100;
  });

  return (
    <div>
      {filterList.map((item) => {
        return (
          <li key={item.id}>
            {item.name} and {item.calories}
          </li>
        );
      })}
    </div>
  );
};
export default ListFilter;
