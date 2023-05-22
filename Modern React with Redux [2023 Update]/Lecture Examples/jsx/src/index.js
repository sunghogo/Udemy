// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // JSX can reference variables and other expressions using {}, but can only properly render numbers, strings, arrays?

  // let message = "Bye there!";
  // if (Math.random() > 0.5) {
  //   message = "Hello there!";
  // }

  // const date = new Date();
  // const time = date.toLocaleTimeString();
  // return <h1>{time}</h1>;
  // return <h1>{new Date().toLocaleTimeString()}</h1>;

  const name = "Samantha";
  const age = 23;

  // You can mix in plain text and multiple variables similar to template literals in JS
  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  );
}

// 5) Show the component on the screen
root.render(<App />);
