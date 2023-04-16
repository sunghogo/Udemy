'use strict';

// L93 Scoping in Practice

// Parent function scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   //   console.log(lastName); // Variable not in scope chain
  //   console.log(firstName); // Variable lookup into parent scope/global scope

  // Child function scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Variable lookups
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // Creating New variable wit same name as outer scope's variable
      const str = `Oh, and you are a millenial, ${firstName}`; // Variable lookup
      console.log(str);

      // Functions are also block scoped in ES6
      function add(a, b) {
        return a + b;
      }

      output = `NEW OUTPUT!`; // Reassigning outher scope's variable
      //   const output = `NEW OUTPUT!`; // Creating new variable
    }
    // console.log(str); // Error: str is block scoped and not accessible outside
    console.log(millenial); // var is function scoped
    // console.log(add(2, 3)); // Error:  functions are blocked scoped so cannot be accessed outside it scope chain IN STRICT MODE
    console.log(output); // Redefined an existing variable that is in scope
  }
  printAge();

  return age;
}

const firstName = 'Jonas'; // Global Variable
calcAge(1991); // Code in function only executed once it is called
// console.log(age); // Error: Cannot access to a child scope
// printAge(); // Error: In global scope, do not have access to any variables defined in child scopes
