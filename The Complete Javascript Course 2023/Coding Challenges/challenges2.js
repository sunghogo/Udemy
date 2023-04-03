'use strict';

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const createWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas && avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);        
    } else {
        console.log('Neither team wins');
    }
}

// Test Data 1
let scoreDolphins1 = 44;
let scoreDolphins2 = 23;
let scoreDolphins3 = 71;

let scoreKoalas1 = 65;
let scoreKoalas2 = 54;
let scoreKoalas3 = 49;

let avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
let avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

createWinner(avgDolphins, avgKoalas);

// Test Data 2
scoreDolphins1 = 85;
scoreDolphins2 = 54;
scoreDolphins3 = 41;

scoreKoalas1 = 23;
scoreKoalas2 = 34;
scoreKoalas3 = 27;

avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

createWinner(avgDolphins, avgKoalas);