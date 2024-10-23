import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import MyComponent from "./MyComponent";
import Project from "./Project";


const App = () => {
return (
  <>
    <MyComponent/>
    <h1>example:- 1 (counter)</h1>
    <Example1/>
    <h1>example:- 2 (text field )</h1>
    <Example2/>
    <h1>example:- 3 (checkbox)</h1>
    <Example3/>
    <h1>This is project:- </h1>
    <Project/>
  </>
)
}
export default App;