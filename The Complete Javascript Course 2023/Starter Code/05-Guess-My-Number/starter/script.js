'use strict';

/*
// L70 PROJECT #1: Guess My Number!
console.log(document.querySelector('.message').textContent);

// L72 Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// L73 Handling Click Events
const x = function () {
  console.log(23);
};

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);

//   document.querySelector('.message').textContent = '🎉 Correct Number!';
// });

document.querySelector('.check').addEventListener('click', function () {
  //   const guess = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
