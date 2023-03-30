// Coding Challenge #1 and #2
/*
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
*/

// Coding Challenge #3
// Data 1
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;

if (averageDolphins > averageKoalas) {
    console.log("Dolphins win!");
} else if (averageDolphins === averageKoalas) {
    console.log("It's a draw!");
} else {
    console.log("Koalas win!");
}

// Bonus Data 1
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins win!");
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
    console.log("It's a draw!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas win!");
} else {
    console.log("Nobody wins!");
}

// Bonus Data 2
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins win!");
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
    console.log("It's a draw!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas win!");
} else {
    console.log("Nobody wins!");
}