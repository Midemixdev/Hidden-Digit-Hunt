'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '✔ Correct Number!';
    document.querySelector('.message').style.color = '#34C759';
    document.querySelector('.message').style.fontWeight = 'bold';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').style.backgroundColor = '#34C759';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.label-highscore').style.color = '#FFD700';
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😒 Guess too high!';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.message').style.fontWeight = 'bold';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😒 Guess too low!';
      document.querySelector('.message').style.color = '#ff9900';
      document.querySelector('.message').style.fontWeight = 'bold';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// remember you added + 1 so it wont't be starting from zero and the * 20 means the end sholud be 20
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
});

document.querySelector('.click').addEventListener('click', function () {
  document.querySelector('.section-2').style.display = 'block';
  document.querySelector('.section-1').style.display = 'none';
});
