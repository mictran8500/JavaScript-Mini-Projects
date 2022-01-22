'use strict';

// Selecting elements - can be const because we are only selecting here
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currScore, currPlayer, playing;

const init = function () {
  // Initializing/resetting scores
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;

  scores = [0, 0];
  currScore = 0;
  currPlayer = 0;
  playing = true;

  // Resetting winner/active classes
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

// Again, the const keyword here defines a constant reference to the array
// The reference may not change, but we can still change the elements of the array
// const scores = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${currPlayer}`).textContent = 0;
  currPlayer = currPlayer === 0 ? 1 : 0;
  currScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: If true, switch to other player
    if (dice !== 1) {
      // Add dice to current score
      currScore += dice;
      document.getElementById(`current--${currPlayer}`).textContent = currScore;
    } else {
      //Switch to next player and reset other player's current score
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[currPlayer] += currScore;
    document.getElementById(`score--${currPlayer}`).textContent =
      scores[currPlayer];

    // 2. Check if the player's score === 100
    if (scores[currPlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.remove('player--active');
    }

    // 3. Switch to next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
