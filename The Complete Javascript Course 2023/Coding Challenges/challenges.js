// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}


// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn  = 85;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);
// markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}   