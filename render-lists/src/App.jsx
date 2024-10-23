import ListFilter from "./ListFilter";
import ListMap1 from "./ListMap1";
import ListMap2 from "./ListMap2";

const App = () => {
  return (
    <>
      <h2>array mapping</h2>
      <ListMap1 />
      <h2>array of object mapping</h2>
      <ListMap2/>
      <h2>filter items</h2>
      <ListFilter/>
    </>
  );
};
export default App;
