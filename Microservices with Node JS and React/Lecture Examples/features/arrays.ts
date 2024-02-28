const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const carArr = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible  values
// carMakers.push(100);

// Help with 'map', 'forEach', 'filter', 'reduce'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [];
importantDates2.push('2030-10-10');
importantDates2.push(new Date());
