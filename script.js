'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (guess, width) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = guess;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.number').textContent = '?';
  displayNumber('?', '15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there's no number

  if (!guess) {
    displayMessage('🔢 no number!');
  }

  // When the player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    displayNumber(guess, '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When the player loses
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("💥 You've lost the game!");
      document.querySelector('.score').textContent = 0;
    }
  }
});
