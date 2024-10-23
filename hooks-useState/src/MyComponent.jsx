// just normal example:-

import { useState } from "react";


const MyComponent = () => {
const [name, setName] = useState('Myra');

const [age, setAge] = useState(8)

const handleClick = () => {
    setName ('Aditi');
    setAge(21);
}
return (
    <div>
        <h1>{`hello my name is ${name} and my age is ${age}`}</h1>
        <button onClick={handleClick}>Update name and age</button>
    </div>
)
}
export default MyComponent;