const Button = () => {
  // const handleClick = () => {
  //   return alert("OUCH!");
  // };

  // parameter button function
  // const handleClick2 = (name) => {
  //   alert(`${name} stop clicking me`);
  // };

  //event
  const handleEvent = (e) => {
   return e.target.textContent = "event run";
  };

  return <button onClick={(e) => handleEvent(e)}>Click Me</button>;
};
export default Button;
