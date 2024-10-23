// it an parent component that send the data to child component

import Worker from "./Workers";

const App = () => {
  return (
    <>
    <h1> Learning Props:- </h1>
      <Worker
        name="Aditi"
        age="21"
        role="Frontend Developer"
        isDeveloper={true}
      />
      <Worker
        name="Sonali"
        age="22"
        role="Wordpress Developer"
        isDeveloper={true}
      />
      <Worker age="21" role="Master Student" isDeveloper={false} />
      <Worker name="Anna" age="22" role="Cyber Security" isDeveloper={false} />
      <Worker
        name="Kirtish"
        age="22"
        role="Full Stack Developer"
        isDeveloper={true}
      />
      <Worker/>
    </>
  );
};
export default App;
