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

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Again, the const keyword here defines a constant reference to the array
// The reference may not change, but we can still change the elements of the array
const scores = [0, 0];
let currScore = 0;
let currPlayer = 0;

const switchPlayer = function() {
    document.getElementById(`current--${currPlayer}`).textContent = 0;
    currPlayer = currPlayer === 0 ? 1: 0;
    currScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: If true, switch to other player
    if(dice !== 1) {
        // Add dice to current score
        currScore += dice;
        document.getElementById(`current--${currPlayer}`).textContent = currScore;
    } else {
        //Switch to next player and reset other player's current score
        switchPlayer();
    }
})

btnHold.addEventListener('click', function() {
    // 1. Add current score to active player's score
    scores[currPlayer] += currScore;
    document.getElementById(`score--${currPlayer}`).textContent = scores[currPlayer];

    // 2. Check if the player's score === 100

    // 3. Switch to next player
    switchPlayer();
})