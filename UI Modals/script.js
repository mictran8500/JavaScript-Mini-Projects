'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    // dont need .hidden because we are not selecting it, we just need the name of the class
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Adding event listeners to all buttons for opening modal
for(let i = 0; i < btnsOpenModal.length; ++i)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// listening for the esc key - keyboard event
// The (e) is the event that occurs
// ex. If the "enter" key was pressed, the event would log - key: "Enter"
document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})