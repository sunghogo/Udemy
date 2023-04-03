'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const descriptionUS = describeCountry('United States', 331, 'Washington, D.C.');
const descriptionFinland = describeCountry('Finalnd', 6, 'Helsinki');
const descriptionPortugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(descriptionUS, descriptionFinland, descriptionPortugal);