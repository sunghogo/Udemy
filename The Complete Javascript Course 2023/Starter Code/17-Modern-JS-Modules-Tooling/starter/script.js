// L272 Exporting and Importing in ES6 Modules
// Importing module

// Named imports
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');
// console.log(shippingCosts)
// addToCart('bread', 5);
// console.log(price, tq);

// Named imports everything
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default imports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// Exports are live connections
console.log(cart);

// L273 Top-Level await (ES2022)
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // Pending Promise
lastPost.then(last => console.log(last));

// Not very clean
const lastPost2 = await getLastPost();
console.log(lastPost2);
