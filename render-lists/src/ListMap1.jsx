// using the map() method for plain array

const ListMap1 = () => {
  const fruits = ["orange", "banana", "apple", "cherry", "pineapple"];

  fruits.sort();

  const fruitItems = fruits.map((fruit,index) => {
    return <li key={index}>{fruit}</li>;
  });

  return <ol>{fruitItems}</ol>;
};
export default ListMap1;
