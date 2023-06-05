import { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    const prob = Math.random();
    let type;
    while (!type && type !== "retry") {
      type =
        prob < 0.33
          ? "cow"
          : prob < 0.66
          ? "bird"
          : prob < 0.99
          ? "horse"
          : "retry";
    }
    setAnimals([...animals, type]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
