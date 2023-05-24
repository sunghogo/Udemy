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
