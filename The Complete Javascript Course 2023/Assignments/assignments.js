// Lecture 10 Values and Variables
/*
let country = "United States";
let continent = "North America";
let population = "331.9";

console.log(country);
console.log(continent);
console.log(population);
*/


//Lecture 12 Data Types
/*
let isIsland = false;
let language;

console.log(isIsland);
console.log(country);
console.log(continent);
console.log(population);\
*/

// Lecture 13 let, const and var
const language = "English";
const country = "United States";
const continent = "North America";
let population = "331.9";
const isIsland = false;
// isIsland = true;

// Lecture 14: Basic Operators
const halfPopulation = population / 2;
population++;
console.log(population);

const finlandPopulation = 6;
const populationGreaterFinland = population > finlandPopulation;
console.log(populationGreaterFinland);

const averagePopulation = 33;
const populationGreaterAverage = population < averagePopulation;
console.log(populationGreaterAverage);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language; 
console.log(description);

// L17 Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);