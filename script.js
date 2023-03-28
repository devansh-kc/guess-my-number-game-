'use strict';

let hidden_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let HighScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ please enter the number ');
  } else if (guess === hidden_number) {
    displayMessage(' correct number  ! you win  🎉🙌🏿🎉🎉');
    document.querySelector('.number').textContent = hidden_number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > HighScore) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
  } else if (guess !== hidden_number) {
    if (score > 1) {
      displayMessage(guess > hidden_number ? ' too high 👇👇' : 'too low👿🗯');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the fuckin game ');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF2E2E';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  hidden_number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
