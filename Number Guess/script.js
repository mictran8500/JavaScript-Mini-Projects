'use strict';

// Initializing the random number outside the click event handler b/c
// if we put it inside the function, we would get a new number every click.
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let hiScore = 0;

const displayMsg = function(msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function() {
    // The user's input comes back as a String, so we need to convert to number
    const guess = Number(document.querySelector('.guess').value);

    // Checking for empty value
    if(!guess) {
        displayMsg('Please enter a number!');

    //When player guesses correctly
    } else if (guess === secretNumber) { 
        displayMsg('Correct!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Setting highscore for current game
        if(score > hiScore) {
            hiScore = score;
            document.querySelector('.highscore').textContent = hiScore;
        }

    // When player guesses too high
    } else if (guess !== secretNumber) {
        if(score > 0) {
            // ternary operator to decide which string to output
            const highLow = guess > secretNumber ? 'Too High' : 'Too Low'
            displayMsg(highLow);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg('No more guesses available.');
        }
    }
})

// Again button - play again
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    displayMsg('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})