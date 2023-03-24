// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn  = 85;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);