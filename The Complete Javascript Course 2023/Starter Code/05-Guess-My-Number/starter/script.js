'use strict';

// L70 PROJECT #1: Guess My Number!

console.log(document.querySelector('.message').textContent);

// L72 Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
