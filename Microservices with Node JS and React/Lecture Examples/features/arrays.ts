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

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());
