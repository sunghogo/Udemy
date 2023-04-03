'use strict';

/*
// L33 Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const descriptionUS = describeCountry('United States', 331, 'Washington, D.C.');
const descriptionFinland = describeCountry('Finalnd', 6, 'Helsinki');
const descriptionPortugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(descriptionUS, descriptionFinland, descriptionPortugal);


// L34 Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const popUS = 332;
const popFinland = 6;
const popPortugal = 10;

console.log(percentageOfWorld1(popUS), percentageOfWorld1(popFinland), percentageOfWorld1(popPortugal));


console.log(percentageOfWorld2(popUS), percentageOfWorld2(popFinland), percentageOfWorld2(popPortugal));
*/


// L35 Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageUS = percentageOfWorld3(332);
const percentageFinaland = percentageOfWorld3(6);
const percentagePortugal = percentageOfWorld3(10);

console.log(percentageUS, percentageFinaland, percentagePortugal);