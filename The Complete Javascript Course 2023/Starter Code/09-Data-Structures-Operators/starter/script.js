'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// L112 Enhanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// L103 Destructuring Arrays:
// Without Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables Without Destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching Variables With Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i,  j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// L104 Destructuring Objects
// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring objects with different variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
// { a, b } = obj; // SyntaxError
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours; // Destructured variable from before
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// L105 The Spread Operator (...):
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // 1, 2, 7, 8, 9
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); // 'j', 'o', 'n', 'a', 's'
console.log('j', 'o', 'n', 'a', 's');
// console.log(`${...str} Schmedtmann`); // Doesn't work

// Real World Example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way of extracting values from arrays
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founding: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Name is different, so we made a copy
console.log(restaurant.name);

// L106 Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// 107 Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuit evaluation/short-circuiting
console.log('---- OR ----');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// Old way of doing it
// restaurant.numGuests = 23;
// restaurant.numGues = 0; // Unexpected behavior as 0 is a falsy value
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // 23 if defined, otheriwse 10
console.log(guests1);
// Short-circuiting method
const guests2 = restaurant.numGuests || 10; // 23 otherwise 10
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas'

console.log('Hello' && 23 && null && 'jonas'); // null

// Practical Example
// Old way of doing it
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

// Short-circuitig method
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// L108 The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10, 0 is a falsy value so does not evaluate it

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? undefined;
console.log(guestsCorrect);

// 109 Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Short-circuit method || assignment
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignemnt operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Short-circuit method && assignment
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// L111 Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// Old method
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// Destructuring method
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

// L113 Optional Chaining (?.)
// Original Method
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // TyperError since 'fri' doesn't exist

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined since mon doesn't exist
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
let users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

// Old method of checking using if-else
// users = [];
if (users.length > 0) console.log(users[0].name);
else console.log('user array Empty');

// L114 Looping Objects: Object Keys, Values, and Entries
// Property NAMES / KEYS
const properties = Object.keys(openingHours);
console.log(properties); // Array with 'thur', 'fri', 'sat'

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values); // Array with elements that are objects with hours

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries); // Array with elements that are arrays with elements that are keys and objects with hours

// key, value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// L116 Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// console.log(ordersSet[0]); // undefined since sets do not have indexes

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('jonasschmedtmann').size);
*/

// L117 Maps: Fundamentals
