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
*/

// L74 Implementing the Game Logic
// L75 Manipulating CSS Styles
// L76 Coding Challenge #1
const genSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

const scoreInitial = Number(document.querySelector('.score').textContent);
let secretNumber = genSecretNumber();
let score = scoreInitial;
let scoreHigh = Number(document.querySelector('.highscore').textContent);

// Check Button listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You Lost the Game!';
  }

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }

  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // New high score
    if (score > scoreHigh) {
      scoreHigh = score;
      document.querySelector('.highscore').textContent = scoreHigh;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button Listener
document.querySelector('.again').addEventListener('click', function () {
  // Reset score and secret number
  score = scoreInitial;
  secretNumber = genSecretNumber();

  // Reset text and input
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
