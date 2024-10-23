// it an child component that accept the props from parents component

const Worker = ({ name='Guest', age, role, isDeveloper }) => {
  return (
    <>
     <div className="card">
     <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Job Role: {role}</h2>
      <h2>isDeveloper: {isDeveloper ? "yes" : "no"}</h2>
     </div>
    </>
  );
};

export default Worker;
